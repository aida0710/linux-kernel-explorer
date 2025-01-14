---
sidebar_position: 1
---
# i915_active.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/compat-i915-headers/i915_active.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _I915_ACTIVE_H_
#define _I915_ACTIVE_H_

#include "i915_active_types.h"

static inline void i915_active_init(struct i915_active *ref,
				    int (*active)(struct i915_active *ref),
				    void (*retire)(struct i915_active *ref),
				    unsigned long flags)
{
	(void) active;
	(void) retire;
}

#define i915_active_fini(active) do { } while (0)

#endif

```
