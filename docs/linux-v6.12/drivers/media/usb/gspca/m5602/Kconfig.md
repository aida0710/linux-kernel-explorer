---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/gspca/m5602/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config USB_M5602
	tristate "ALi USB m5602 Camera Driver"
	depends on VIDEO_DEV && USB_GSPCA
	help
	  Say Y here if you want support for cameras based on the
	  ALi m5602 connected to various image sensors.

	  To compile this driver as a module, choose M here: the
	  module will be called gspca_m5602.

```
