---
sidebar_position: 111
---
# xe_gt_throttle.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_gt_throttle.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _XE_GT_THROTTLE_H_
#define _XE_GT_THROTTLE_H_

#include <linux/types.h>

struct xe_gt;

int xe_gt_throttle_init(struct xe_gt *gt);

u32 xe_gt_throttle_get_limit_reasons(struct xe_gt *gt);

#endif /* _XE_GT_THROTTLE_H_ */

```
