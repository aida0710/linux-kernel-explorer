---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/hyperv/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

hyperv_drm-y := \
	hyperv_drm_drv.o \
	hyperv_drm_modeset.o \
	hyperv_drm_proto.o

obj-$(CONFIG_DRM_HYPERV) += hyperv_drm.o

```
