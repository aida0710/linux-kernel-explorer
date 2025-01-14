---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/hisilicon/kirin/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
kirin-drm-y := kirin_drm_drv.o \
	       kirin_drm_ade.o

obj-$(CONFIG_DRM_HISI_KIRIN) += kirin-drm.o dw_drm_dsi.o


```
