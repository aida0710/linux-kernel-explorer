---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/samsung/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Samsung Ethernet device configuration
#

config NET_VENDOR_SAMSUNG
	bool "Samsung Ethernet devices"
	default y
	help
	  If you have a network (Ethernet) chipset belonging to this class,
	  say Y.

	  Note that the answer to this question does not directly affect
	  the kernel: saying N will just cause the configurator to skip all
	  the questions about Samsung chipsets. If you say Y, you will be asked
	  for your specific chipset/driver in the following questions.

if NET_VENDOR_SAMSUNG

config SXGBE_ETH
	tristate "Samsung 10G/2.5G/1G SXGBE Ethernet driver"
	depends on HAS_IOMEM && HAS_DMA
	depends on PTP_1588_CLOCK_OPTIONAL
	select PHYLIB
	select CRC32
	help
	  This is the driver for the SXGBE 10G Ethernet IP block found on
	  Samsung platforms.

	  To compile this driver as a module, choose M here: the module
	  will be called samsung-sxgbe.

endif # NET_VENDOR_SAMSUNG

```
