---
sidebar_position: 22
---
# intel_guc_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/uc/intel_guc_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef DEBUGFS_GUC_H
#define DEBUGFS_GUC_H

struct intel_guc;
struct dentry;

void intel_guc_debugfs_register(struct intel_guc *guc, struct dentry *root);

#endif /* DEBUGFS_GUC_H */

```
