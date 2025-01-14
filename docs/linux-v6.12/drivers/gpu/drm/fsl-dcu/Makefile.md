---
sidebar_position: 13
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/fsl-dcu/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
fsl-dcu-drm-y := fsl_dcu_drm_drv.o \
		 fsl_dcu_drm_kms.o \
		 fsl_dcu_drm_rgb.o \
		 fsl_dcu_drm_plane.o \
		 fsl_dcu_drm_crtc.o \
		 fsl_tcon.o
obj-$(CONFIG_DRM_FSL_DCU)	+= fsl-dcu-drm.o

```
