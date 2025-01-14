---
sidebar_position: 30
---
# i915_getparam.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/i915_getparam.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef __I915_GETPARAM_H__
#define __I915_GETPARAM_H__

struct drm_device;
struct drm_file;

int i915_getparam_ioctl(struct drm_device *dev, void *data,
			struct drm_file *file_priv);

#endif /* __I915_GETPARAM_H__ */

```
