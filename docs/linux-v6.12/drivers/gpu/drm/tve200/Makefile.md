---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/tve200/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
tve200_drm-y +=	tve200_display.o \
		tve200_drv.o

obj-$(CONFIG_DRM_TVE200) += tve200_drm.o

```
