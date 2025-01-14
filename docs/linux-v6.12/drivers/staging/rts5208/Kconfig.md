---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rts5208/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config RTS5208
	tristate "Realtek PCI-E Card Reader RTS5208/5288 support"
	depends on PCI && SCSI
	help
	  Say Y here to include driver code to support the Realtek
	  PCI-E card reader rts5208/rts5288.

	  If this driver is compiled as a module, it will be named rts5208.

```
