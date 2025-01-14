---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/samsung/s5p-mfc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config VIDEO_SAMSUNG_S5P_MFC
	tristate "Samsung S5P MFC Video Codec"
	depends on V4L_MEM2MEM_DRIVERS
	depends on VIDEO_DEV
	depends on ARCH_S5PV210 || ARCH_EXYNOS || COMPILE_TEST
	select VIDEOBUF2_DMA_CONTIG
	help
	    MFC 5.1 and 6.x driver for V4L2

```
