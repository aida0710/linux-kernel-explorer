---
sidebar_position: 30
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/loongson/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

loongson-y := \
	lsdc_benchmark.o \
	lsdc_crtc.o \
	lsdc_debugfs.o \
	lsdc_drv.o \
	lsdc_gem.o \
	lsdc_gfxpll.o \
	lsdc_i2c.o \
	lsdc_irq.o \
	lsdc_output_7a1000.o \
	lsdc_output_7a2000.o \
	lsdc_plane.o \
	lsdc_pixpll.o \
	lsdc_probe.o \
	lsdc_ttm.o

loongson-y += loongson_device.o \
	      loongson_module.o

obj-$(CONFIG_DRM_LOONGSON) += loongson.o

```
