---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/davicom/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Davicom device configuration
#

config NET_VENDOR_DAVICOM
	bool "Davicom devices"
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Davicom devices. If you say Y, you will be asked
	  for your specific card in the following selections.

if NET_VENDOR_DAVICOM

config DM9000
	tristate "DM9000 support"
	depends on ARM || MIPS || COLDFIRE || NIOS2 || COMPILE_TEST
	select CRC32
	select MII
	help
	  Support for DM9000 chipset.

	  To compile this driver as a module, choose M here.  The module
	  will be called dm9000.

config DM9000_FORCE_SIMPLE_PHY_POLL
	bool "Force simple NSR based PHY polling"
	depends on DM9000
	help
	  This configuration forces the DM9000 to use the NSR's LinkStatus
	  bit to determine if the link is up or down instead of the more
	  costly MII PHY reads. Note, this will not work if the chip is
	  operating with an external PHY.

config DM9051
	tristate "DM9051 SPI support"
	depends on SPI
	select CRC32
	select MDIO
	select PHYLIB
	select REGMAP_SPI
	help
	  Support for DM9051 SPI chipset.

	  To compile this driver as a module, choose M here.  The module
	  will be called dm9051.

	  The SPI mode for the host's SPI master to access DM9051 is mode
	  0 on the SPI bus.

endif # NET_VENDOR_DAVICOM

```
