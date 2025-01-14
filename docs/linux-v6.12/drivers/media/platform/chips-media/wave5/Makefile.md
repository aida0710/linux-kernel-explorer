---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/chips-media/wave5/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_VIDEO_WAVE_VPU) += wave5.o
wave5-objs +=  	wave5-hw.o \
		wave5-vpuapi.o \
		wave5-vdi.o \
		wave5-vpu-dec.o \
		wave5-vpu.o \
		wave5-vpu-enc.o \
		wave5-helper.o

```
