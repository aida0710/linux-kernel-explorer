---
sidebar_position: 18
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/vt6655/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

vt6655_stage-y +=	device_main.o \
	card.o \
	channel.o \
	mac.o \
	baseband.o \
	rxtx.o \
	dpc.o \
	power.o \
	srom.o \
	key.o \
	rf.o

obj-$(CONFIG_VT6655) +=	vt6655_stage.o

```
