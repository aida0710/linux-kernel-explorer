---
sidebar_position: 161
---
# sysfs_engines.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/sysfs_engines.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef INTEL_ENGINE_SYSFS_H
#define INTEL_ENGINE_SYSFS_H

struct drm_i915_private;

void intel_engines_add_sysfs(struct drm_i915_private *i915);

#endif /* INTEL_ENGINE_SYSFS_H */

```
