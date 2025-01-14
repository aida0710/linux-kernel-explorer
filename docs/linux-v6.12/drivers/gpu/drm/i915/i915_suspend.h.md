---
sidebar_position: 74
---
# i915_suspend.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/i915_suspend.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __I915_SUSPEND_H__
#define __I915_SUSPEND_H__

struct drm_i915_private;

void i915_save_display(struct drm_i915_private *i915);
void i915_restore_display(struct drm_i915_private *i915);

#endif /* __I915_SUSPEND_H__ */

```
