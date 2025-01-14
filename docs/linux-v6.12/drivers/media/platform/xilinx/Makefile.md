---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/xilinx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

xilinx-video-objs += xilinx-dma.o xilinx-vip.o xilinx-vipp.o

obj-$(CONFIG_VIDEO_XILINX) += xilinx-video.o
obj-$(CONFIG_VIDEO_XILINX_CSI2RXSS) += xilinx-csi2rxss.o
obj-$(CONFIG_VIDEO_XILINX_TPG) += xilinx-tpg.o
obj-$(CONFIG_VIDEO_XILINX_VTC) += xilinx-vtc.o

```
