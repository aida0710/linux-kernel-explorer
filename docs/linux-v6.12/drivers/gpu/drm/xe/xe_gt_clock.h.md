---
sidebar_position: 65
---
# xe_gt_clock.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_gt_clock.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_GT_CLOCK_H_
#define _XE_GT_CLOCK_H_

#include <linux/types.h>

struct xe_gt;

int xe_gt_clock_init(struct xe_gt *gt);
u64 xe_gt_clock_interval_to_ms(struct xe_gt *gt, u64 count);

#endif

```
