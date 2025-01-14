---
sidebar_position: 6
---
# i915_gpu_error.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/compat-i915-headers/i915_gpu_error.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _I915_GPU_ERROR_H_
#define _I915_GPU_ERROR_H_

struct drm_i915_error_state_buf;

__printf(2, 3)
static inline void
i915_error_printf(struct drm_i915_error_state_buf *e, const char *f, ...)
{
}

#endif

```
