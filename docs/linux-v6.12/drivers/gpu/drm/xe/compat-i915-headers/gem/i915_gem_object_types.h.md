---
sidebar_position: 5
---
# i915_gem_object_types.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/compat-i915-headers/gem/i915_gem_object_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/* Copyright © 2024 Intel Corporation */

#ifndef __I915_GEM_OBJECT_TYPES_H__
#define __I915_GEM_OBJECT_TYPES_H__

#include "xe_bo.h"

#define to_intel_bo(x) gem_to_xe_bo((x))

#endif

```
