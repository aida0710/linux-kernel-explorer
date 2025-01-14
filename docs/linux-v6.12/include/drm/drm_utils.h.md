---
sidebar_position: 83
---
# drm_utils.h

### ファイル情報

- パス: `linux-v6.12/include/drm/drm_utils.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Function prototypes for misc. drm utility functions.
 * Specifically this file is for function prototypes for functions which
 * may also be used outside of drm code (e.g. in fbdev drivers).
 *
 * Copyright (C) 2017 Hans de Goede <hdegoede@redhat.com>
 */

#ifndef __DRM_UTILS_H__
#define __DRM_UTILS_H__

#include <linux/types.h>

int drm_get_panel_orientation_quirk(int width, int height);

signed long drm_timeout_abs_to_jiffies(int64_t timeout_nsec);

#endif

```
