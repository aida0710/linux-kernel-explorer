---
sidebar_position: 53
---
# intel_gt_buffer_pool_types.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_gt_buffer_pool_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2014-2018 Intel Corporation
 */

#ifndef INTEL_GT_BUFFER_POOL_TYPES_H
#define INTEL_GT_BUFFER_POOL_TYPES_H

#include <linux/list.h>
#include <linux/spinlock.h>
#include <linux/workqueue.h>

#include "gem/i915_gem_object_types.h"
#include "i915_active_types.h"

struct intel_gt_buffer_pool {
	spinlock_t lock;
	struct list_head cache_list[4];
	struct delayed_work work;
};

struct intel_gt_buffer_pool_node {
	struct i915_active active;
	struct drm_i915_gem_object *obj;
	struct list_head link;
	union {
		struct intel_gt_buffer_pool *pool;
		struct intel_gt_buffer_pool_node *free;
		struct rcu_head rcu;
	};
	unsigned long age;
	enum i915_map_type type;
	u32 pinned;
};

#endif /* INTEL_GT_BUFFER_POOL_TYPES_H */

```
