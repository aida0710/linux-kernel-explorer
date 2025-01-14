---
sidebar_position: 12
---
# i915_debugfs_params.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/i915_debugfs_params.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __I915_DEBUGFS_PARAMS__
#define __I915_DEBUGFS_PARAMS__

struct dentry;
struct drm_i915_private;

struct dentry *i915_debugfs_params(struct drm_i915_private *i915);

#endif /* __I915_DEBUGFS_PARAMS__ */

```
