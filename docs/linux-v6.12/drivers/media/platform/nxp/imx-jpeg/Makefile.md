---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/nxp/imx-jpeg/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
mxc-jpeg-encdec-objs := mxc-jpeg-hw.o mxc-jpeg.o
obj-$(CONFIG_VIDEO_IMX8_JPEG) += mxc-jpeg-encdec.o

```
