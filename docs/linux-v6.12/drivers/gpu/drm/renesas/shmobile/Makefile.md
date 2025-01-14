---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/renesas/shmobile/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
shmob-drm-y := shmob_drm_crtc.o \
	       shmob_drm_drv.o \
	       shmob_drm_kms.o \
	       shmob_drm_plane.o

obj-$(CONFIG_DRM_SHMOBILE)	+= shmob-drm.o

```
