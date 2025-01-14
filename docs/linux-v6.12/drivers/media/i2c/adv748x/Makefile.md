---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/i2c/adv748x/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
adv748x-objs	:= \
		adv748x-afe.o \
		adv748x-core.o \
		adv748x-csi2.o \
		adv748x-hdmi.o

obj-$(CONFIG_VIDEO_ADV748X)	+= adv748x.o

```
