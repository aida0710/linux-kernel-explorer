---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/st/sti/bdisp/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config VIDEO_STI_BDISP
	tristate "STMicroelectronics BDISP 2D blitter driver"
	depends on V4L_MEM2MEM_DRIVERS
	depends on VIDEO_DEV
	depends on ARCH_STI || COMPILE_TEST
	select VIDEOBUF2_DMA_CONTIG
	select V4L2_MEM2MEM_DEV
	help
	  This v4l2 mem2mem driver is a 2D blitter for STMicroelectronics SoC.

```
