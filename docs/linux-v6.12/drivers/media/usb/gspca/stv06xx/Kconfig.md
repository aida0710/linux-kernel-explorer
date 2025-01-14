---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/gspca/stv06xx/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config USB_STV06XX
	tristate "STV06XX USB Camera Driver"
	depends on USB_GSPCA
	help
	  Say Y here if you want support for cameras based on
	  the ST STV06XX chip.

	  To compile this driver as a module, choose M here: the
	  module will be called gspca_stv06xx.

```
