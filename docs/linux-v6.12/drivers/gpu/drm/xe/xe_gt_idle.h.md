---
sidebar_position: 71
---
# xe_gt_idle.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_gt_idle.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _XE_GT_IDLE_H_
#define _XE_GT_IDLE_H_

#include "xe_gt_idle_types.h"

struct xe_gt;

int xe_gt_idle_init(struct xe_gt_idle *gtidle);
void xe_gt_idle_enable_c6(struct xe_gt *gt);
void xe_gt_idle_disable_c6(struct xe_gt *gt);
void xe_gt_idle_enable_pg(struct xe_gt *gt);
void xe_gt_idle_disable_pg(struct xe_gt *gt);

#endif /* _XE_GT_IDLE_H_ */

```
