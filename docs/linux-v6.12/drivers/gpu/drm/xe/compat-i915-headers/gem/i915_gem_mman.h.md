---
sidebar_position: 2
---
# i915_gem_mman.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/compat-i915-headers/gem/i915_gem_mman.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _I915_GEM_MMAN_H_
#define _I915_GEM_MMAN_H_

#include "xe_bo_types.h"
#include <drm/drm_prime.h>

static inline int i915_gem_fb_mmap(struct xe_bo *bo, struct vm_area_struct *vma)
{
	return drm_gem_prime_mmap(&bo->ttm.base, vma);
}

#endif

```
