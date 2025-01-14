---
sidebar_position: 80
---
# intel_gt_sysfs_pm.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_gt_sysfs_pm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef __SYSFS_GT_PM_H__
#define __SYSFS_GT_PM_H__

#include <linux/kobject.h>

#include "intel_gt_types.h"

void intel_gt_sysfs_pm_init(struct intel_gt *gt, struct kobject *kobj);

#endif /* SYSFS_RC6_H */

```
