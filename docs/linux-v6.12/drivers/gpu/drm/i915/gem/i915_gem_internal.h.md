---
sidebar_position: 17
---
# i915_gem_internal.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gem/i915_gem_internal.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef __I915_GEM_INTERNAL_H__
#define __I915_GEM_INTERNAL_H__

#include <linux/types.h>

struct drm_i915_gem_object;
struct drm_i915_gem_object_ops;
struct drm_i915_private;

struct drm_i915_gem_object *
i915_gem_object_create_internal(struct drm_i915_private *i915,
				phys_addr_t size);
struct drm_i915_gem_object *
__i915_gem_object_create_internal(struct drm_i915_private *i915,
				  const struct drm_i915_gem_object_ops *ops,
				  phys_addr_t size);

#endif /* __I915_GEM_INTERNAL_H__ */

```
