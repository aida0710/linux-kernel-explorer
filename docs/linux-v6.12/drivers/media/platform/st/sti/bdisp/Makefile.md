---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/st/sti/bdisp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_VIDEO_STI_BDISP) += bdisp.o

bdisp-objs := bdisp-v4l2.o bdisp-hw.o bdisp-debug.o

```
