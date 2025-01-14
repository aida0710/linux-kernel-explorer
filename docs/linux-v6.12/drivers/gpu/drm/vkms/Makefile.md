---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/vkms/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
vkms-y := \
	vkms_drv.o \
	vkms_plane.o \
	vkms_output.o \
	vkms_formats.o \
	vkms_crtc.o \
	vkms_composer.o \
	vkms_writeback.o

obj-$(CONFIG_DRM_VKMS) += vkms.o

```
