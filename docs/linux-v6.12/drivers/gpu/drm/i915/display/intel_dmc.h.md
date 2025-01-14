---
sidebar_position: 104
---
# intel_dmc.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_dmc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __INTEL_DMC_H__
#define __INTEL_DMC_H__

#include <linux/types.h>

enum pipe;
struct drm_i915_private;
struct drm_printer;

void intel_dmc_init(struct drm_i915_private *i915);
void intel_dmc_load_program(struct drm_i915_private *i915);
void intel_dmc_disable_program(struct drm_i915_private *i915);
void intel_dmc_enable_pipe(struct drm_i915_private *i915, enum pipe pipe);
void intel_dmc_disable_pipe(struct drm_i915_private *i915, enum pipe pipe);
void intel_dmc_fini(struct drm_i915_private *i915);
void intel_dmc_suspend(struct drm_i915_private *i915);
void intel_dmc_resume(struct drm_i915_private *i915);
bool intel_dmc_has_payload(struct drm_i915_private *i915);
void intel_dmc_debugfs_register(struct drm_i915_private *i915);
void intel_dmc_print_error_state(struct drm_printer *p,
				 struct drm_i915_private *i915);

void assert_dmc_loaded(struct drm_i915_private *i915);

#endif /* __INTEL_DMC_H__ */

```
