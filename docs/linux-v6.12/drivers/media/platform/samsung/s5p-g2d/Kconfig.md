---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/samsung/s5p-g2d/Kconfig`

### コンテンツ

```txt
config VIDEO_SAMSUNG_S5P_G2D
	tristate "Samsung S5P and EXYNOS4 G2D 2d graphics accelerator driver"
	depends on V4L_MEM2MEM_DRIVERS
	depends on VIDEO_DEV
	depends on ARCH_S5PV210 || ARCH_EXYNOS || COMPILE_TEST
	select VIDEOBUF2_DMA_CONTIG
	select V4L2_MEM2MEM_DEV
	help
	  This is a v4l2 driver for Samsung S5P and EXYNOS4 G2D
	  2d graphics accelerator.


```
