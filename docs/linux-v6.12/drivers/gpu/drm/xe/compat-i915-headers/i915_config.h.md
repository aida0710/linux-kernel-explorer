---
sidebar_position: 3
---
# i915_config.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/compat-i915-headers/i915_config.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef __I915_CONFIG_H__
#define __I915_CONFIG_H__

#include <linux/sched.h>

struct drm_i915_private;

static inline unsigned long
i915_fence_timeout(const struct drm_i915_private *i915)
{
	return MAX_SCHEDULE_TIMEOUT;
}

#endif /* __I915_CONFIG_H__ */

```
