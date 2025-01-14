---
sidebar_position: 82
---
# intel_hwconfig.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_hwconfig.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _INTEL_HWCONFIG_H_
#define _INTEL_HWCONFIG_H_

#include <linux/types.h>

struct intel_gt;

struct intel_hwconfig {
	u32 size;
	void *ptr;
};

int intel_gt_init_hwconfig(struct intel_gt *gt);
void intel_gt_fini_hwconfig(struct intel_gt *gt);

#endif /* _INTEL_HWCONFIG_H_ */

```
