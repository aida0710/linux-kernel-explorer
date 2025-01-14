---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/chips-media/wave5/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config VIDEO_WAVE_VPU
	tristate "Chips&Media Wave Codec Driver"
	depends on V4L_MEM2MEM_DRIVERS
	depends on VIDEO_DEV && OF
	depends on ARCH_K3 || COMPILE_TEST
	select VIDEOBUF2_DMA_CONTIG
	select VIDEOBUF2_VMALLOC
	select V4L2_MEM2MEM_DEV
	select GENERIC_ALLOCATOR
	help
	  Chips&Media stateful encoder and decoder driver.
	  The driver supports HEVC and H264 formats.
	  To compile this driver as modules, choose M here: the
	  modules will be called wave5.

```
