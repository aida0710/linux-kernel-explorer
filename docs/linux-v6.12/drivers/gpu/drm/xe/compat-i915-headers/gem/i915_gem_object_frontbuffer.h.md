---
sidebar_position: 4
---
# i915_gem_object_frontbuffer.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/compat-i915-headers/gem/i915_gem_object_frontbuffer.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _I915_GEM_OBJECT_FRONTBUFFER_H_
#define _I915_GEM_OBJECT_FRONTBUFFER_H_

#define i915_gem_object_get_frontbuffer(obj)		NULL
#define i915_gem_object_set_frontbuffer(obj, front)	(front)

#endif

```
