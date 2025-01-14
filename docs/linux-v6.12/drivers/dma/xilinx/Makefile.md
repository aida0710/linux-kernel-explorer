---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/dma/xilinx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_XILINX_DMA) += xilinx_dma.o
obj-$(CONFIG_XILINX_XDMA) += xdma.o
obj-$(CONFIG_XILINX_ZYNQMP_DMA) += zynqmp_dma.o
obj-$(CONFIG_XILINX_ZYNQMP_DPDMA) += xilinx_dpdma.o

```
