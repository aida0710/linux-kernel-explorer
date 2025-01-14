---
sidebar_position: 18
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/cx25821/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
cx25821-y   := cx25821-core.o cx25821-cards.o cx25821-i2c.o \
		       cx25821-gpio.o cx25821-medusa-video.o \
		       cx25821-video.o

obj-$(CONFIG_VIDEO_CX25821) += cx25821.o
obj-$(CONFIG_VIDEO_CX25821_ALSA) += cx25821-alsa.o

```
