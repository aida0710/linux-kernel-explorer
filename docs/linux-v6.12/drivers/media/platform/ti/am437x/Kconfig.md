---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/ti/am437x/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config VIDEO_AM437X_VPFE
	tristate "TI AM437x VPFE video capture driver"
	depends on V4L_PLATFORM_DRIVERS
	depends on VIDEO_DEV
	depends on SOC_AM43XX || COMPILE_TEST
	select MEDIA_CONTROLLER
	select VIDEO_V4L2_SUBDEV_API
	select VIDEOBUF2_DMA_CONTIG
	select V4L2_FWNODE
	help
	   Support for AM437x Video Processing Front End based Video
	   Capture Driver.

	   To compile this driver as a module, choose M here. The module
	   will be called am437x-vpfe.

```
