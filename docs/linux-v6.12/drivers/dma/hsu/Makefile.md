---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/dma/hsu/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_HSU_DMA)		+= hsu_dma.o
hsu_dma-objs		:= hsu.o

obj-$(CONFIG_HSU_DMA_PCI)	+= hsu_dma_pci.o
hsu_dma_pci-objs	:= pci.o

```
