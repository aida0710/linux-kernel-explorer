---
sidebar_position: 4
---
# cc770_platform.c

### ファイル情報

- パス: `drivers/net/can/cc770/cc770_platform.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Driver for CC770 and AN82527 CAN controllers on the platform bus
 *
 * Copyright (C) 2009, 2011 Wolfgang Grandegger <wg@grandegger.com>
 */

/*
 * If platform data are used you should have similar definitions
 * in your board-specific code:
 *
 *   static struct cc770_platform_data myboard_cc770_pdata = {
 *           .osc_freq = 16000000,
 *           .cir = 0x41,
 *           .cor = 0x20,
 *           .bcr = 0x40,
 *   };
 *
 * Please see include/linux/can/platform/cc770.h for description of
 * above fields.
 *
 * If the device tree is used, you need a CAN node definition in your
 * DTS file similar to:
 *
 *   can@3,100 {
 *           compatible = "bosch,cc770";
 *           reg = <3 0x100 0x80>;
 *           interrupts = <2 0>;
 *           interrupt-parent = <&mpic>;
 *           bosch,external-clock-frequency = <16000000>;
 *   };
 *
 * See "Documentation/devicetree/bindings/net/can/cc770.txt" for further
 * information.
 */

#include <linux/kernel.h>
#include <linux/module.h>
#include <linux/interrupt.h>
#include <linux/netdevice.h>
#include <linux/delay.h>
#include <linux/platform_device.h>
#include <linux/of.h>
#include <linux/can.h>
#include <linux/can/dev.h>
#include <linux/can/platform/cc770.h>

#include "cc770.h"

#define DRV_NAME "cc770_platform"

MODULE_AUTHOR("Wolfgang Grandegger <wg@grandegger.com>");
MODULE_DESCRIPTION("Socket-CAN driver for CC770 on the platform bus");
MODULE_LICENSE("GPL v2");
MODULE_ALIAS("platform:" DRV_NAME);

#define CC770_PLATFORM_CAN_CLOCK  16000000

static u8 cc770_platform_read_reg(const struct cc770_priv *priv, int reg)
{
	return ioread8(priv->reg_base + reg);
}

static void cc770_platform_write_reg(const struct cc770_priv *priv, int reg,
				     u8 val)
{
	iowrite8(val, priv->reg_base + reg);
}

static int cc770_get_of_node_data(struct platform_device *pdev,
				  struct cc770_priv *priv)
{
	u32 clkext = CC770_PLATFORM_CAN_CLOCK, clkout = 0;
	struct device_node *np = pdev->dev.of_node;

	of_property_read_u32(np, "bosch,external-clock-frequency", &clkext);
	priv->can.clock.freq = clkext;

	/* The system clock may not exceed 10 MHz */
	if (priv->can.clock.freq > 10000000) {
		priv->cpu_interface |= CPUIF_DSC;
		priv->can.clock.freq /= 2;
	}

	/* The memory clock may not exceed 8 MHz */
	if (priv->can.clock.freq > 8000000)
		priv->cpu_interface |= CPUIF_DMC;

	if (of_property_read_bool(np, "bosch,divide-memory-clock"))
		priv->cpu_interface |= CPUIF_DMC;
	if (of_property_read_bool(np, "bosch,iso-low-speed-mux"))
		priv->cpu_interface |= CPUIF_MUX;

	if (!of_property_read_bool(np, "bosch,no-comperator-bypass"))
		priv->bus_config |= BUSCFG_CBY;
	if (of_property_read_bool(np, "bosch,disconnect-rx0-input"))
		priv->bus_config |= BUSCFG_DR0;
	if (of_property_read_bool(np, "bosch,disconnect-rx1-input"))
		priv->bus_config |= BUSCFG_DR1;
	if (of_property_read_bool(np, "bosch,disconnect-tx1-output"))
		priv->bus_config |= BUSCFG_DT1;
	if (of_property_read_bool(np, "bosch,polarity-dominant"))
		priv->bus_config |= BUSCFG_POL;

	of_property_read_u32(np, "bosch,clock-out-frequency", &clkout);
	if (clkout > 0) {
		u32 cdv = clkext / clkout;

		if (cdv > 0 && cdv < 16) {
			u32 slew;

			priv->cpu_interface |= CPUIF_CEN;
			priv->clkout |= (cdv - 1) & CLKOUT_CD_MASK;

			if (of_property_read_u32(np, "bosch,slew-rate", &slew)) {
				/* Determine default slew rate */
				slew = (CLKOUT_SL_MASK >>
					CLKOUT_SL_SHIFT) -
					((cdv * clkext - 1) / 8000000);
				if (slew > (CLKOUT_SL_MASK >> CLKOUT_SL_SHIFT))
					slew = 0;
			}
			priv->clkout |= (slew << CLKOUT_SL_SHIFT) &
				CLKOUT_SL_MASK;
		} else {
			dev_dbg(&pdev->dev, "invalid clock-out-frequency\n");
		}
	}

	return 0;
}

static int cc770_get_platform_data(struct platform_device *pdev,
				   struct cc770_priv *priv)
{

	struct cc770_platform_data *pdata = dev_get_platdata(&pdev->dev);

	priv->can.clock.freq = pdata->osc_freq;
	if (priv->cpu_interface & CPUIF_DSC)
		priv->can.clock.freq /= 2;
	priv->clkout = pdata->cor;
	priv->bus_config = pdata->bcr;
	priv->cpu_interface = pdata->cir;

	return 0;
}

static int cc770_platform_probe(struct platform_device *pdev)
{
	struct net_device *dev;
	struct cc770_priv *priv;
	struct resource *mem;
	resource_size_t mem_size;
	void __iomem *base;
	int err, irq;

	mem = platform_get_resource(pdev, IORESOURCE_MEM, 0);
	irq = platform_get_irq(pdev, 0);
	if (!mem || irq <= 0)
		return -ENODEV;

	mem_size = resource_size(mem);
	if (!request_mem_region(mem->start, mem_size, pdev->name))
		return -EBUSY;

	base = ioremap(mem->start, mem_size);
	if (!base) {
		err = -ENOMEM;
		goto exit_release_mem;
	}

	dev = alloc_cc770dev(0);
	if (!dev) {
		err = -ENOMEM;
		goto exit_unmap_mem;
	}

	dev->irq = irq;
	priv = netdev_priv(dev);
	priv->read_reg = cc770_platform_read_reg;
	priv->write_reg = cc770_platform_write_reg;
	priv->irq_flags = IRQF_SHARED;
	priv->reg_base = base;

	if (pdev->dev.of_node)
		err = cc770_get_of_node_data(pdev, priv);
	else if (dev_get_platdata(&pdev->dev))
		err = cc770_get_platform_data(pdev, priv);
	else
		err = -ENODEV;
	if (err)
		goto exit_free_cc770;

	dev_dbg(&pdev->dev,
		 "reg_base=0x%p irq=%d clock=%d cpu_interface=0x%02x "
		 "bus_config=0x%02x clkout=0x%02x\n",
		 priv->reg_base, dev->irq, priv->can.clock.freq,
		 priv->cpu_interface, priv->bus_config, priv->clkout);

	platform_set_drvdata(pdev, dev);
	SET_NETDEV_DEV(dev, &pdev->dev);

	err = register_cc770dev(dev);
	if (err) {
		dev_err(&pdev->dev,
			"couldn't register CC700 device (err=%d)\n", err);
		goto exit_free_cc770;
	}

	return 0;

exit_free_cc770:
	free_cc770dev(dev);
exit_unmap_mem:
	iounmap(base);
exit_release_mem:
	release_mem_region(mem->start, mem_size);

	return err;
}

static void cc770_platform_remove(struct platform_device *pdev)
{
	struct net_device *dev = platform_get_drvdata(pdev);
	struct cc770_priv *priv = netdev_priv(dev);
	struct resource *mem;

	unregister_cc770dev(dev);
	iounmap(priv->reg_base);
	free_cc770dev(dev);

	mem = platform_get_resource(pdev, IORESOURCE_MEM, 0);
	release_mem_region(mem->start, resource_size(mem));
}

static const struct of_device_id cc770_platform_table[] = {
	{.compatible = "bosch,cc770"}, /* CC770 from Bosch */
	{.compatible = "intc,82527"},  /* AN82527 from Intel CP */
	{},
};
MODULE_DEVICE_TABLE(of, cc770_platform_table);

static struct platform_driver cc770_platform_driver = {
	.driver = {
		.name = DRV_NAME,
		.of_match_table = cc770_platform_table,
	},
	.probe = cc770_platform_probe,
	.remove = cc770_platform_remove,
};

module_platform_driver(cc770_platform_driver);

```
