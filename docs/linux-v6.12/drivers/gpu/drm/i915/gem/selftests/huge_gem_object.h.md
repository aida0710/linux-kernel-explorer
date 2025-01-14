---
sidebar_position: 2
---
# huge_gem_object.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gem/selftests/huge_gem_object.h`

### コンテンツ

```h
/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright © 2016 Intel Corporation
 */

#ifndef __HUGE_GEM_OBJECT_H
#define __HUGE_GEM_OBJECT_H

#include <linux/types.h>

#include "gem/i915_gem_object_types.h"

struct drm_i915_private;

struct drm_i915_gem_object *
huge_gem_object(struct drm_i915_private *i915,
		phys_addr_t phys_size,
		dma_addr_t dma_size);

static inline phys_addr_t
huge_gem_object_phys_size(struct drm_i915_gem_object *obj)
{
	return obj->scratch;
}

static inline dma_addr_t
huge_gem_object_dma_size(struct drm_i915_gem_object *obj)
{
	return obj->base.size;
}

#endif /* !__HUGE_GEM_OBJECT_H */

```
