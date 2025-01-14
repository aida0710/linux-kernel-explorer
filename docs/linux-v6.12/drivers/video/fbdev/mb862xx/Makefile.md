---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/video/fbdev/mb862xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the MB862xx framebuffer driver
#

obj-$(CONFIG_FB_MB862XX) += mb862xxfb.o

mb862xxfb-y := mb862xxfbdrv.o mb862xxfb_accel.o
mb862xxfb-$(CONFIG_FB_MB862XX_I2C) += mb862xx-i2c.o

```
