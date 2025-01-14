---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/common/saa7146/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
saa7146-objs    := saa7146_i2c.o saa7146_core.o
saa7146_vv-objs := saa7146_fops.o saa7146_video.o saa7146_hlp.o saa7146_vbi.o

obj-$(CONFIG_VIDEO_SAA7146) += saa7146.o
obj-$(CONFIG_VIDEO_SAA7146_VV) += saa7146_vv.o

```
