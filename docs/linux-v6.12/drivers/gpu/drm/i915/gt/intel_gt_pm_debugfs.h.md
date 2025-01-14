---
sidebar_position: 70
---
# intel_gt_pm_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_gt_pm_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef INTEL_GT_PM_DEBUGFS_H
#define INTEL_GT_PM_DEBUGFS_H

struct intel_gt;
struct dentry;
struct drm_printer;

void intel_gt_pm_debugfs_register(struct intel_gt *gt, struct dentry *root);
void intel_gt_pm_frequency_dump(struct intel_gt *gt, struct drm_printer *m);

/* functions that need to be accessed by the upper level non-gt interfaces */
void intel_gt_pm_debugfs_forcewake_user_open(struct intel_gt *gt);
void intel_gt_pm_debugfs_forcewake_user_release(struct intel_gt *gt);

#endif /* INTEL_GT_PM_DEBUGFS_H */

```
