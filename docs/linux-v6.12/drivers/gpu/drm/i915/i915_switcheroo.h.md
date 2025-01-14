---
sidebar_position: 76
---
# i915_switcheroo.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/i915_switcheroo.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __I915_SWITCHEROO__
#define __I915_SWITCHEROO__

struct drm_i915_private;

int i915_switcheroo_register(struct drm_i915_private *i915);
void i915_switcheroo_unregister(struct drm_i915_private *i915);

#endif /* __I915_SWITCHEROO__ */

```
