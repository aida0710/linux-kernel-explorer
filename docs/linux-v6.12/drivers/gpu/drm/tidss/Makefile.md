---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/tidss/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

tidss-y := tidss_crtc.o \
	tidss_drv.o \
	tidss_encoder.o \
	tidss_kms.o \
	tidss_irq.o \
	tidss_plane.o \
	tidss_scale_coefs.o \
	tidss_dispc.o

obj-$(CONFIG_DRM_TIDSS) += tidss.o

```
