---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/s2255/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config USB_S2255
	tristate "USB Sensoray 2255 video capture device"
	depends on VIDEO_DEV
	select VIDEOBUF2_VMALLOC
	help
	  Say Y here if you want support for the Sensoray 2255 USB device.
	  This driver can be compiled as a module, called s2255drv.


```
