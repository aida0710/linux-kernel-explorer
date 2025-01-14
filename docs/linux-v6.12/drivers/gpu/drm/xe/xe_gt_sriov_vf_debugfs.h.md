---
sidebar_position: 103
---
# xe_gt_sriov_vf_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_gt_sriov_vf_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023-2024 Intel Corporation
 */

#ifndef _XE_GT_SRIOV_VF_DEBUGFS_H_
#define _XE_GT_SRIOV_VF_DEBUGFS_H_

struct xe_gt;
struct dentry;

void xe_gt_sriov_vf_debugfs_register(struct xe_gt *gt, struct dentry *root);

#endif

```
