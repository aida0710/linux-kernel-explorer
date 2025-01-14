---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/raspberrypi/pisp_be/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for Raspberry Pi PiSP Backend driver
#
pisp-be-objs := pisp_be.o
obj-$(CONFIG_VIDEO_RASPBERRYPI_PISP_BE) += pisp-be.o

```
