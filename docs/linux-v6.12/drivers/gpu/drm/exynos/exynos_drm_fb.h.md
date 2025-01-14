---
sidebar_position: 12
---
# exynos_drm_fb.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/exynos/exynos_drm_fb.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Copyright (c) 2011 Samsung Electronics Co., Ltd.
 * Authors:
 *	Inki Dae <inki.dae@samsung.com>
 *	Joonyoung Shim <jy0922.shim@samsung.com>
 *	Seung-Woo Kim <sw0312.kim@samsung.com>
 */

#ifndef _EXYNOS_DRM_FB_H_
#define _EXYNOS_DRM_FB_H_

#include "exynos_drm_gem.h"

struct drm_framebuffer *
exynos_drm_framebuffer_init(struct drm_device *dev,
			    const struct drm_mode_fb_cmd2 *mode_cmd,
			    struct exynos_drm_gem **exynos_gem,
			    int count);

dma_addr_t exynos_drm_fb_dma_addr(struct drm_framebuffer *fb, int index);

void exynos_drm_mode_config_init(struct drm_device *dev);

#endif

```
