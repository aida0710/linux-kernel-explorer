---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/mediatek/jpeg/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config VIDEO_MEDIATEK_JPEG
	tristate "Mediatek JPEG Codec driver"
	depends on V4L_MEM2MEM_DRIVERS
	depends on MTK_IOMMU_V1 || MTK_IOMMU || COMPILE_TEST
	depends on VIDEO_DEV
	depends on ARCH_MEDIATEK || COMPILE_TEST
	depends on MTK_SMI || (COMPILE_TEST && MTK_SMI=n)
	select VIDEOBUF2_DMA_CONTIG
	select V4L2_MEM2MEM_DEV
	help
	  Mediatek jpeg codec driver provides HW capability to decode
	  JPEG format

	  To compile this driver as a module, choose M here: the
	  module will be called mtk-jpeg

```
