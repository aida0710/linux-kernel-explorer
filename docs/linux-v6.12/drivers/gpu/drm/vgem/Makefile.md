---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/vgem/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
vgem-y := vgem_drv.o vgem_fence.o

obj-$(CONFIG_DRM_VGEM)	+= vgem.o

```
