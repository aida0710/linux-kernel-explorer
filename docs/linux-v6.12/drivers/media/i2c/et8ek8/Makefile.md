---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/i2c/et8ek8/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
et8ek8-objs			+= et8ek8_mode.o et8ek8_driver.o
obj-$(CONFIG_VIDEO_ET8EK8)	+= et8ek8.o

```
