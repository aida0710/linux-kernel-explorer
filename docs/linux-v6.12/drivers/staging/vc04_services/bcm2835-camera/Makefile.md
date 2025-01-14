---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/vc04_services/bcm2835-camera/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
bcm2835-v4l2-$(CONFIG_VIDEO_BCM2835) := \
	bcm2835-camera.o \
	controls.o

obj-$(CONFIG_VIDEO_BCM2835) += bcm2835-v4l2.o

```
