---
sidebar_position: 10
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/samsung/s5p-jpeg/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config VIDEO_SAMSUNG_S5P_JPEG
	tristate "Samsung S5P/Exynos3250/Exynos4 JPEG codec driver"
	depends on V4L_MEM2MEM_DRIVERS
	depends on VIDEO_DEV
	depends on ARCH_S5PV210 || ARCH_EXYNOS || COMPILE_TEST
	select VIDEOBUF2_DMA_CONTIG
	select V4L2_MEM2MEM_DEV
	help
	  This is a v4l2 driver for Samsung S5P, EXYNOS3250
	  and EXYNOS4 JPEG codec

```
