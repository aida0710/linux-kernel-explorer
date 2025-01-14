---
sidebar_position: 15
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/vt6656/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

vt6656_stage-y +=	main_usb.o \
			card.o  \
			mac.o   \
			baseband.o \
			wcmd.o\
			rxtx.o \
			power.o \
			key.o \
			rf.o \
			usbpipe.o \
			channel.o

obj-$(CONFIG_VT6656) +=	vt6656_stage.o

```
