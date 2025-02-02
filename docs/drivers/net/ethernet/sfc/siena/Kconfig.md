---
sidebar_position: 16
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/sfc/siena/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SFC_SIENA
	tristate "Solarflare SFC9000 support"
	depends on PCI
	depends on PTP_1588_CLOCK
	select MDIO
	select CRC32
	help
	  This driver supports 10-gigabit Ethernet cards based on
	  the Solarflare SFC9000 controller.

	  To compile this driver as a module, choose M here.  The module
	  will be called sfc-siena.
config SFC_SIENA_MTD
	bool "Solarflare SFC9000-family MTD support"
	depends on SFC_SIENA && MTD && !(SFC_SIENA=y && MTD=m)
	default y
	help
	  This exposes the on-board flash and/or EEPROM as MTD devices
	  (e.g. /dev/mtd1).  This is required to update the firmware or
	  the boot configuration under Linux.
config SFC_SIENA_MCDI_MON
	bool "Solarflare SFC9000-family hwmon support"
	depends on SFC_SIENA && HWMON && !(SFC_SIENA=y && HWMON=m)
	default y
	help
	  This exposes the on-board firmware-managed sensors as a
	  hardware monitor device.
config SFC_SIENA_SRIOV
	bool "Solarflare SFC9000-family SR-IOV support"
	depends on SFC_SIENA && PCI_IOV
	default n
	help
	  This enables support for the Single Root I/O Virtualization
	  features, allowing accelerated network performance in
	  virtualized environments.
config SFC_SIENA_MCDI_LOGGING
	bool "Solarflare SFC9000-family MCDI logging support"
	depends on SFC_SIENA
	default y
	help
	  This enables support for tracing of MCDI (Management-Controller-to-
	  Driver-Interface) commands and responses, allowing debugging of
	  driver/firmware interaction.  The tracing is actually enabled by
	  a sysfs file 'mcdi_logging' under the PCI device, or via module
	  parameter mcdi_logging_default.

```
