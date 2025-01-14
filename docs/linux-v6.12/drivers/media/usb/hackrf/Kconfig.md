---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/hackrf/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config USB_HACKRF
	tristate "HackRF"
	depends on VIDEO_DEV
	select VIDEOBUF2_VMALLOC
	help
	  This is a video4linux2 driver for HackRF SDR device.

	  To compile this driver as a module, choose M here: the
	  module will be called hackrf


```
