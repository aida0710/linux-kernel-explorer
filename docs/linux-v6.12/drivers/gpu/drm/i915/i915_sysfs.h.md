---
sidebar_position: 84
---
# i915_sysfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/i915_sysfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __I915_SYSFS_H__
#define __I915_SYSFS_H__

struct device;
struct drm_i915_private;

struct drm_i915_private *kdev_minor_to_i915(struct device *kdev);

void i915_setup_sysfs(struct drm_i915_private *i915);
void i915_teardown_sysfs(struct drm_i915_private *i915);

#endif /* __I915_SYSFS_H__ */

```
