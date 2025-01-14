---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/stm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
stm-drm-y := \
	drv.o \
	ltdc.o

obj-$(CONFIG_DRM_STM_DSI) += dw_mipi_dsi-stm.o

obj-$(CONFIG_DRM_STM_LVDS) += lvds.o

obj-$(CONFIG_DRM_STM) += stm-drm.o

```
