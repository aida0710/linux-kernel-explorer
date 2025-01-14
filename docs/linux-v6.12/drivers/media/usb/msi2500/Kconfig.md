---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/msi2500/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config USB_MSI2500
	tristate "Mirics MSi2500"
	depends on VIDEO_DEV && SPI
	select VIDEOBUF2_VMALLOC
	select MEDIA_TUNER_MSI001

```
