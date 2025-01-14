---
sidebar_position: 14
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/media/sunxi/cedrus/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config VIDEO_SUNXI_CEDRUS
	tristate "Allwinner Cedrus VPU driver"
	depends on VIDEO_DEV
	depends on RESET_CONTROLLER
	depends on HAS_DMA
	depends on OF
	select MEDIA_CONTROLLER
	select SUNXI_SRAM
	select VIDEOBUF2_DMA_CONTIG
	select V4L2_MEM2MEM_DEV
	help
	  Support for the VPU found in Allwinner SoCs, also known as the Cedar
	  video engine.

	  To compile this driver as a module, choose M here: the module
	  will be called sunxi-cedrus.

```
