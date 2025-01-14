---
sidebar_position: 7
---
# i915_config.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/i915_config.c`

### コンテンツ

```c
// SPDX-License-Identifier: MIT
/*
 * Copyright © 2020 Intel Corporation
 */

#include <linux/kernel.h>

#include "i915_config.h"
#include "i915_utils.h"

unsigned long
i915_fence_context_timeout(const struct drm_i915_private *i915, u64 context)
{
	if (CONFIG_DRM_I915_FENCE_TIMEOUT && context)
		return msecs_to_jiffies_timeout(CONFIG_DRM_I915_FENCE_TIMEOUT);

	return 0;
}

```
