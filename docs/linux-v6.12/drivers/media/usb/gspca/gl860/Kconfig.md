---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/gspca/gl860/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config USB_GL860
	tristate "GL860 USB Camera Driver"
	depends on VIDEO_DEV && USB_GSPCA
	help
	  Say Y here if you want support for cameras based on the GL860 chip.

	  To compile this driver as a module, choose M here: the
	  module will be called gspca_gl860.

```
