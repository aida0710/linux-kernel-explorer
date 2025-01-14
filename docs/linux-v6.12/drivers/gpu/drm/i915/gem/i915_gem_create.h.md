---
sidebar_position: 10
---
# i915_gem_create.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gem/i915_gem_create.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef __I915_GEM_CREATE_H__
#define __I915_GEM_CREATE_H__

struct drm_file;
struct drm_device;
struct drm_mode_create_dumb;

int i915_gem_dumb_create(struct drm_file *file_priv,
			 struct drm_device *dev,
			 struct drm_mode_create_dumb *args);

#endif /* __I915_GEM_CREATE_H__ */

```
