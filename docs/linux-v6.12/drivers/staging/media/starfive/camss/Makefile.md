---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/media/starfive/camss/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for StarFive Camera Subsystem driver
#

starfive-camss-objs += \
		stf-camss.o \
		stf-capture.o \
		stf-isp.o \
		stf-isp-hw-ops.o \
		stf-video.o

obj-$(CONFIG_VIDEO_STARFIVE_CAMSS) += starfive-camss.o

```
