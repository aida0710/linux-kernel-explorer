---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/intel/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

comment "Intel media platform drivers"

config VIDEO_PXA27x
	tristate "PXA27x Quick Capture Interface driver"
	depends on V4L_PLATFORM_DRIVERS
	depends on VIDEO_DEV
	depends on PXA27x || COMPILE_TEST
	select VIDEOBUF2_DMA_SG
	select SG_SPLIT
	select V4L2_FWNODE
	help
	  This is a v4l2 driver for the PXA27x Quick Capture Interface

```
