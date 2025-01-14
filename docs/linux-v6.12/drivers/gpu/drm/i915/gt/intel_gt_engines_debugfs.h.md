---
sidebar_position: 62
---
# intel_gt_engines_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_gt_engines_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef INTEL_GT_ENGINES_DEBUGFS_H
#define INTEL_GT_ENGINES_DEBUGFS_H

struct intel_gt;
struct dentry;

void intel_gt_engines_debugfs_register(struct intel_gt *gt, struct dentry *root);

#endif /* INTEL_GT_ENGINES_DEBUGFS_H */

```
