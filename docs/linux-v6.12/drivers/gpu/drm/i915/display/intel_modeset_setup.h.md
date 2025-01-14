---
sidebar_position: 209
---
# intel_modeset_setup.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_modeset_setup.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef __INTEL_MODESET_SETUP_H__
#define __INTEL_MODESET_SETUP_H__

struct drm_i915_private;
struct drm_modeset_acquire_ctx;

void intel_modeset_setup_hw_state(struct drm_i915_private *i915,
				  struct drm_modeset_acquire_ctx *ctx);

#endif /* __INTEL_MODESET_SETUP_H__ */

```
