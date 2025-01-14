---
sidebar_position: 102
---
# intel_clock_gating.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/intel_clock_gating.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __INTEL_CLOCK_GATING_H__
#define __INTEL_CLOCK_GATING_H__

struct drm_i915_private;

void intel_clock_gating_init(struct drm_i915_private *i915);
void intel_clock_gating_hooks_init(struct drm_i915_private *i915);

#endif /* __INTEL_CLOCK_GATING_H__ */

```
