---
sidebar_position: 29
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/ti/omap3isp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for OMAP3 ISP driver

ccflags-$(CONFIG_VIDEO_OMAP3_DEBUG) += -DDEBUG

omap3-isp-objs += \
	isp.o ispvideo.o \
	ispcsiphy.o ispccp2.o ispcsi2.o \
	ispccdc.o isppreview.o ispresizer.o \
	ispstat.o isph3a_aewb.o isph3a_af.o isphist.o

obj-$(CONFIG_VIDEO_OMAP3) += omap3-isp.o

```
