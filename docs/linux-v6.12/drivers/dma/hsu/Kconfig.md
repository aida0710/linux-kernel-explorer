---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/dma/hsu/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# DMA engine configuration for hsu
config HSU_DMA
	tristate
	select DMA_ENGINE
	select DMA_VIRTUAL_CHANNELS

config HSU_DMA_PCI
	tristate
	depends on HSU_DMA && PCI

```
