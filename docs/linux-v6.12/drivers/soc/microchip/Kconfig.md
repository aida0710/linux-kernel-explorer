---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/soc/microchip/Kconfig`

### コンテンツ

```txt
config POLARFIRE_SOC_SYS_CTRL
	tristate "Microchip PolarFire SoC (MPFS) system controller support"
	depends on POLARFIRE_SOC_MAILBOX
	depends on MTD
	help
	  This driver adds support for the PolarFire SoC (MPFS) system controller.

	  To compile this driver as a module, choose M here. the
	  module will be called mpfs_system_controller.

	  If unsure, say N.

```
