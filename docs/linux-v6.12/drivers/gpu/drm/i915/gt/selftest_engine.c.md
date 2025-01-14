---
sidebar_position: 132
---
# selftest_engine.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/selftest_engine.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright © 2018 Intel Corporation
 */

#include "i915_selftest.h"
#include "selftest_engine.h"

int intel_engine_live_selftests(struct drm_i915_private *i915)
{
	static int (* const tests[])(struct intel_gt *) = {
		live_engine_pm_selftests,
		NULL,
	};
	struct intel_gt *gt = to_gt(i915);
	typeof(*tests) *fn;

	for (fn = tests; *fn; fn++) {
		int err;

		err = (*fn)(gt);
		if (err)
			return err;
	}

	return 0;
}

```
