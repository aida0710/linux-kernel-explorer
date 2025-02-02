---
sidebar_position: 12
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/sfc/falcon/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SFC_FALCON
	tristate "Solarflare SFC4000 support"
	depends on PCI
	select MDIO
	select CRC32
	select I2C
	select I2C_ALGOBIT
	help
	  This driver supports 10-gigabit Ethernet cards based on
	  the Solarflare SFC4000 controller.

	  To compile this driver as a module, choose M here.  The module
	  will be called sfc-falcon.
config SFC_FALCON_MTD
	bool "Solarflare SFC4000 MTD support"
	depends on SFC_FALCON && MTD && !(SFC_FALCON=y && MTD=m)
	default y
	help
	  This exposes the on-board flash and/or EEPROM as MTD devices
	  (e.g. /dev/mtd1).  This is required to update the boot
	  configuration under Linux.

```
