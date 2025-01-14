---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/panfrost/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

panfrost-y := \
	panfrost_drv.o \
	panfrost_device.o \
	panfrost_devfreq.o \
	panfrost_gem.o \
	panfrost_gem_shrinker.o \
	panfrost_gpu.o \
	panfrost_job.o \
	panfrost_mmu.o \
	panfrost_perfcnt.o \
	panfrost_dump.o

obj-$(CONFIG_DRM_PANFROST) += panfrost.o

```
