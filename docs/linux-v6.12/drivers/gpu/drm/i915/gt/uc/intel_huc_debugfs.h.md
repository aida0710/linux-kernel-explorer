---
sidebar_position: 43
---
# intel_huc_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/uc/intel_huc_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef DEBUGFS_HUC_H
#define DEBUGFS_HUC_H

struct intel_huc;
struct dentry;

void intel_huc_debugfs_register(struct intel_huc *huc, struct dentry *root);

#endif /* DEBUGFS_HUC_H */

```
