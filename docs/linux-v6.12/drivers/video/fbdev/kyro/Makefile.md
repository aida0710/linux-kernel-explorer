---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/video/fbdev/kyro/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Kyro framebuffer driver
#

obj-$(CONFIG_FB_KYRO)	+= kyrofb.o

kyrofb-objs	:= STG4000Ramdac.o STG4000VTG.o STG4000OverlayDevice.o \
		   STG4000InitDevice.o fbdev.o

```
