---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/tw68/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config VIDEO_TW68
	tristate "Techwell tw68x Video For Linux"
	depends on VIDEO_DEV && PCI
	select VIDEOBUF2_DMA_SG
	help
	  Support for Techwell tw68xx based frame grabber boards.

	  To compile this driver as a module, choose M here: the
	  module will be called tw68.

```
