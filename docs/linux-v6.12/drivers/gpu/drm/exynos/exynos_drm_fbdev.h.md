---
sidebar_position: 14
---
# exynos_drm_fbdev.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/exynos/exynos_drm_fbdev.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Copyright (c) 2011 Samsung Electronics Co., Ltd.
 *
 * Authors:
 *	Inki Dae <inki.dae@samsung.com>
 *	Joonyoung Shim <jy0922.shim@samsung.com>
 *	Seung-Woo Kim <sw0312.kim@samsung.com>
 */

#ifndef _EXYNOS_DRM_FBDEV_H_
#define _EXYNOS_DRM_FBDEV_H_

#ifdef CONFIG_DRM_FBDEV_EMULATION
void exynos_drm_fbdev_setup(struct drm_device *dev);
#else
static inline void exynos_drm_fbdev_setup(struct drm_device *dev)
{
}
#endif

#endif

```
