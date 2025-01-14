---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/i2c/s5c73m3/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
s5c73m3-objs			:= s5c73m3-core.o s5c73m3-spi.o s5c73m3-ctrls.o
obj-$(CONFIG_VIDEO_S5C73M3)	+= s5c73m3.o

```
