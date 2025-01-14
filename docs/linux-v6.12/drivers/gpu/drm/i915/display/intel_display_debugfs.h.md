---
sidebar_position: 72
---
# intel_display_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_display_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef __INTEL_DISPLAY_DEBUGFS_H__
#define __INTEL_DISPLAY_DEBUGFS_H__

struct drm_i915_private;
struct intel_connector;
struct intel_crtc;

#ifdef CONFIG_DEBUG_FS
void intel_display_debugfs_register(struct drm_i915_private *i915);
void intel_connector_debugfs_add(struct intel_connector *connector);
void intel_crtc_debugfs_add(struct intel_crtc *crtc);
#else
static inline void intel_display_debugfs_register(struct drm_i915_private *i915) {}
static inline void intel_connector_debugfs_add(struct intel_connector *connector) {}
static inline void intel_crtc_debugfs_add(struct intel_crtc *crtc) {}
#endif

#endif /* __INTEL_DISPLAY_DEBUGFS_H__ */

```
