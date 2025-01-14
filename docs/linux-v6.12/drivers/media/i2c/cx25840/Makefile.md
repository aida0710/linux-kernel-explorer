---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/i2c/cx25840/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
cx25840-objs    := cx25840-core.o cx25840-audio.o cx25840-firmware.o \
		   cx25840-vbi.o cx25840-ir.o

obj-$(CONFIG_VIDEO_CX25840) += cx25840.o

```
