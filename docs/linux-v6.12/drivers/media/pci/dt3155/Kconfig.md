---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/dt3155/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config VIDEO_DT3155
	tristate "DT3155 frame grabber"
	depends on PCI && VIDEO_DEV
	select VIDEOBUF2_DMA_CONTIG
	help
	  Enables dt3155 device driver for the DataTranslation DT3155 frame grabber.
	  Say Y here if you have this hardware.
	  In doubt, say N.

	  To compile this driver as a module, choose M here: the
	  module will be called dt3155.

```
