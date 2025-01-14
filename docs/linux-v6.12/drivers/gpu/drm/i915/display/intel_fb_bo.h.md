---
sidebar_position: 162
---
# intel_fb_bo.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_fb_bo.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef __INTEL_FB_BO_H__
#define __INTEL_FB_BO_H__

struct drm_file;
struct drm_mode_fb_cmd2;
struct drm_i915_gem_object;
struct drm_i915_private;
struct intel_framebuffer;

void intel_fb_bo_framebuffer_fini(struct drm_i915_gem_object *obj);

int intel_fb_bo_framebuffer_init(struct intel_framebuffer *intel_fb,
				 struct drm_i915_gem_object *obj,
				 struct drm_mode_fb_cmd2 *mode_cmd);

struct drm_i915_gem_object *
intel_fb_bo_lookup_valid_bo(struct drm_i915_private *i915,
			    struct drm_file *filp,
			    const struct drm_mode_fb_cmd2 *user_mode_cmd);

#endif

```
