---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/hisilicon/hibmc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
hibmc-drm-y := hibmc_drm_drv.o hibmc_drm_de.o hibmc_drm_vdac.o hibmc_drm_i2c.o

obj-$(CONFIG_DRM_HISI_HIBMC) += hibmc-drm.o

```
