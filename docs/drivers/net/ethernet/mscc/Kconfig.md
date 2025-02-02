---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/mscc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: (GPL-2.0 OR MIT)
config NET_VENDOR_MICROSEMI
	bool "Microsemi devices"
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Microsemi devices.

if NET_VENDOR_MICROSEMI

# Users should depend on NET_SWITCHDEV, HAS_IOMEM, BRIDGE
config MSCC_OCELOT_SWITCH_LIB
	depends on PTP_1588_CLOCK_OPTIONAL
	select NET_DEVLINK
	select REGMAP_MMIO
	select PACKING
	select PHYLINK
	tristate
	help
	  This is a hardware support library for Ocelot network switches. It is
	  used by switchdev as well as by DSA drivers.

config MSCC_OCELOT_SWITCH
	tristate "Ocelot switch driver"
	depends on PTP_1588_CLOCK_OPTIONAL
	depends on BRIDGE || BRIDGE=n
	depends on NET_SWITCHDEV
	depends on HAS_IOMEM
	depends on OF
	select MSCC_OCELOT_SWITCH_LIB
	select GENERIC_PHY
	help
	  This driver supports the Ocelot network switch device as present on
	  the Ocelot SoCs (VSC7514).

endif # NET_VENDOR_MICROSEMI

```
