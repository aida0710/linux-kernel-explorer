---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/panthor/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0 or MIT

panthor-y := \
	panthor_devfreq.o \
	panthor_device.o \
	panthor_drv.o \
	panthor_fw.o \
	panthor_gem.o \
	panthor_gpu.o \
	panthor_heap.o \
	panthor_mmu.o \
	panthor_sched.o

obj-$(CONFIG_DRM_PANTHOR) += panthor.o

```
