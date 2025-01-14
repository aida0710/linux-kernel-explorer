---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/hdpvr/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config VIDEO_HDPVR
	tristate "Hauppauge HD PVR support"
	depends on VIDEO_DEV
	help
	  This is a video4linux driver for Hauppauge's HD PVR USB device.

	  To compile this driver as a module, choose M here: the
	  module will be called hdpvr


```
