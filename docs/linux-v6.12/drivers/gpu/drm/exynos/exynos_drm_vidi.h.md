---
sidebar_position: 30
---
# exynos_drm_vidi.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/exynos/exynos_drm_vidi.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/* exynos_drm_vidi.h
 *
 * Copyright (c) 2012 Samsung Electronics Co., Ltd.
 * Author: Inki Dae <inki.dae@samsung.com>
 */

#ifndef _EXYNOS_DRM_VIDI_H_
#define _EXYNOS_DRM_VIDI_H_

#ifdef CONFIG_DRM_EXYNOS_VIDI
int vidi_connection_ioctl(struct drm_device *drm_dev, void *data,
				struct drm_file *file_priv);
#else
#define vidi_connection_ioctl	NULL
#endif

#endif

```
