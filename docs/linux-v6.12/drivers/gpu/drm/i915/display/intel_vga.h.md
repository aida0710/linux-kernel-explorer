---
sidebar_position: 263
---
# intel_vga.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_vga.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __INTEL_VGA_H__
#define __INTEL_VGA_H__

struct drm_i915_private;

void intel_vga_reset_io_mem(struct drm_i915_private *i915);
void intel_vga_disable(struct drm_i915_private *i915);
void intel_vga_redisable(struct drm_i915_private *i915);
void intel_vga_redisable_power_on(struct drm_i915_private *i915);
int intel_vga_register(struct drm_i915_private *i915);
void intel_vga_unregister(struct drm_i915_private *i915);

#endif /* __INTEL_VGA_H__ */

```
