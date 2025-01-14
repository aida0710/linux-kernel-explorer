---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/usbtv/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
usbtv-y := usbtv-core.o \
	usbtv-video.o \
	usbtv-audio.o

obj-$(CONFIG_VIDEO_USBTV) += usbtv.o

```
