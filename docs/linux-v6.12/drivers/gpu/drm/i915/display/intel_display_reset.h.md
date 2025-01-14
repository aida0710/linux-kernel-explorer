---
sidebar_position: 92
---
# intel_display_reset.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_display_reset.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef __INTEL_RESET_H__
#define __INTEL_RESET_H__

struct drm_i915_private;

void intel_display_reset_prepare(struct drm_i915_private *i915);
void intel_display_reset_finish(struct drm_i915_private *i915);

#endif /* __INTEL_RESET_H__ */

```
