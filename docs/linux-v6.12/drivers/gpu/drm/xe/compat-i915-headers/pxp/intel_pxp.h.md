---
sidebar_position: 1
---
# intel_pxp.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/compat-i915-headers/pxp/intel_pxp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef __INTEL_PXP_H__
#define __INTEL_PXP_H__

#include <linux/errno.h>
#include <linux/types.h>

struct drm_i915_gem_object;
struct intel_pxp;

static inline int intel_pxp_key_check(struct intel_pxp *pxp,
				      struct drm_i915_gem_object *obj,
				      bool assign)
{
	return -ENODEV;
}

static inline bool
i915_gem_object_is_protected(const struct drm_i915_gem_object *obj)
{
	return false;
}

#endif

```
