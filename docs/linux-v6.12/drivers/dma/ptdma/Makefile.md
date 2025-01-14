---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/dma/ptdma/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# AMD Passthru DMA driver
#

obj-$(CONFIG_AMD_PTDMA) += ptdma.o

ptdma-objs := ptdma-dev.o ptdma-dmaengine.o ptdma-debugfs.o

ptdma-$(CONFIG_PCI) += ptdma-pci.o

```
