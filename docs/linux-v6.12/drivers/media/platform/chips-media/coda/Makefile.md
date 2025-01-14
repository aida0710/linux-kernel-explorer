---
sidebar_position: 13
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/chips-media/coda/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

coda-vpu-objs := coda-common.o coda-bit.o coda-gdi.o coda-h264.o coda-mpeg2.o coda-mpeg4.o coda-jpeg.o

obj-$(CONFIG_VIDEO_CODA) += coda-vpu.o
obj-$(CONFIG_VIDEO_IMX_VDOA) += imx-vdoa.o

```
