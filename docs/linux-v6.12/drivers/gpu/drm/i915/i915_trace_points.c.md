---
sidebar_position: 87
---
# i915_trace_points.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/i915_trace_points.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright © 2009 Intel Corporation
 *
 * Authors:
 *    Chris Wilson <chris@chris-wilson.co.uk>
 */

#include "i915_drv.h"

#ifndef __CHECKER__
#define CREATE_TRACE_POINTS
#include "i915_trace.h"
#endif

```
