---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/video/fbdev/sis/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the SiS framebuffer device driver
#

obj-$(CONFIG_FB_SIS) += sisfb.o

sisfb-objs := sis_main.o sis_accel.o init.o init301.o initextlfb.o

```
