---
sidebar_position: 2
---
# i915_gemfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gem/i915_gemfs.h`

### コンテンツ

```h
/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright © 2017 Intel Corporation
 */

#ifndef __I915_GEMFS_H__
#define __I915_GEMFS_H__

struct drm_i915_private;

void i915_gemfs_init(struct drm_i915_private *i915);
void i915_gemfs_fini(struct drm_i915_private *i915);

#endif

```
