---
sidebar_position: 23
---
# intel_context_param.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_context_param.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef INTEL_CONTEXT_PARAM_H
#define INTEL_CONTEXT_PARAM_H

#include <linux/types.h>

#include "intel_context.h"

static inline void
intel_context_set_watchdog_us(struct intel_context *ce, u64 timeout_us)
{
	ce->watchdog.timeout_us = timeout_us;
}

#endif /* INTEL_CONTEXT_PARAM_H */

```
