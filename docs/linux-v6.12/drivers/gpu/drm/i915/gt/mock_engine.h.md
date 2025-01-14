---
sidebar_position: 130
---
# mock_engine.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/mock_engine.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2016 Intel Corporation
 */

#ifndef __MOCK_ENGINE_H__
#define __MOCK_ENGINE_H__

#include <linux/list.h>
#include <linux/spinlock.h>
#include <linux/timer.h>

#include "gt/intel_engine.h"

struct mock_engine {
	struct intel_engine_cs base;

	spinlock_t hw_lock;
	struct list_head hw_queue;
	struct timer_list hw_delay;
};

struct intel_engine_cs *mock_engine(struct drm_i915_private *i915,
				    const char *name,
				    int id);
int mock_engine_init(struct intel_engine_cs *engine);

void mock_engine_flush(struct intel_engine_cs *engine);
void mock_engine_reset(struct intel_engine_cs *engine);
void mock_engine_free(struct intel_engine_cs *engine);

#endif /* !__MOCK_ENGINE_H__ */

```
