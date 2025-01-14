---
sidebar_position: 32
---
# drm_fbdev_ttm.h

### ファイル情報

- パス: `linux-v6.12/include/drm/drm_fbdev_ttm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */

#ifndef DRM_FBDEV_TTM_H
#define DRM_FBDEV_TTM_H

struct drm_device;

#ifdef CONFIG_DRM_FBDEV_EMULATION
void drm_fbdev_ttm_setup(struct drm_device *dev, unsigned int preferred_bpp);
#else
static inline void drm_fbdev_ttm_setup(struct drm_device *dev, unsigned int preferred_bpp)
{ }
#endif

#endif

```
