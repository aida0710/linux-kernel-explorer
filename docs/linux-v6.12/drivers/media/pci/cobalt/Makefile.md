---
sidebar_position: 27
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/cobalt/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
cobalt-objs    := cobalt-driver.o cobalt-irq.o cobalt-v4l2.o \
		  cobalt-i2c.o cobalt-omnitek.o cobalt-flash.o cobalt-cpld.o \
		  cobalt-alsa-main.o cobalt-alsa-pcm.o

obj-$(CONFIG_VIDEO_COBALT) += cobalt.o

```
