---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/ipack/devices/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SERIAL_IPOCTAL
	tristate "IndustryPack IP-OCTAL uart support"
	depends on IPACK_BUS && TTY
	help
	  This driver supports the IPOCTAL serial port device for the IndustryPack bus.
	default n

```
