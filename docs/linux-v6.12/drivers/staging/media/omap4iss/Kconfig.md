---
sidebar_position: 16
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/media/omap4iss/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

config VIDEO_OMAP4
	tristate "OMAP 4 Camera support"
	depends on VIDEO_DEV  && I2C
	depends on ARCH_OMAP4 || COMPILE_TEST
	select MEDIA_CONTROLLER
	select VIDEO_V4L2_SUBDEV_API
	select MFD_SYSCON
	select VIDEOBUF2_DMA_CONTIG
	help
	  Driver for an OMAP 4 ISS controller.

```
