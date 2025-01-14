---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/ti/vpe/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_VIDEO_TI_VPE) += ti-vpe.o
obj-$(CONFIG_VIDEO_TI_VPDMA) += ti-vpdma.o
obj-$(CONFIG_VIDEO_TI_SC) += ti-sc.o
obj-$(CONFIG_VIDEO_TI_CSC) += ti-csc.o

ti-vpe-y := vpe.o
ti-vpdma-y := vpdma.o
ti-sc-y := sc.o
ti-csc-y := csc.o

ccflags-$(CONFIG_VIDEO_TI_VPE_DEBUG) += -DDEBUG

```
