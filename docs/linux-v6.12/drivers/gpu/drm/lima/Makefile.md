---
sidebar_position: 34
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/lima/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0 OR MIT
# Copyright 2017-2019 Qiang Yu <yuq825@gmail.com>

lima-y := \
	lima_drv.o \
	lima_device.o \
	lima_pmu.o \
	lima_l2_cache.o \
	lima_mmu.o \
	lima_gp.o \
	lima_pp.o \
	lima_gem.o \
	lima_vm.o \
	lima_sched.o \
	lima_ctx.o \
	lima_dlbu.o \
	lima_bcast.o \
	lima_trace.o \
	lima_devfreq.o

obj-$(CONFIG_DRM_LIMA) += lima.o

```
