---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/stk1160/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
stk1160-y :=	stk1160-core.o \
		stk1160-v4l.o \
		stk1160-video.o \
		stk1160-i2c.o \
		stk1160-ac97.o

obj-$(CONFIG_VIDEO_STK1160) += stk1160.o

```
