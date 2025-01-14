---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/sprd/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

sprd-drm-y := sprd_drm.o \
	sprd_dpu.o \
	sprd_dsi.o \
	megacores_pll.o

obj-$(CONFIG_DRM_SPRD) += sprd-drm.o
```
