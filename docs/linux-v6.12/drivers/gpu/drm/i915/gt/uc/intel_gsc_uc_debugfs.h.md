---
sidebar_position: 10
---
# intel_gsc_uc_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/uc/intel_gsc_uc_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef DEBUGFS_GSC_UC_H
#define DEBUGFS_GSC_UC_H

struct intel_gsc_uc;
struct dentry;

void intel_gsc_uc_debugfs_register(struct intel_gsc_uc *gsc, struct dentry *root);

#endif /* DEBUGFS_GSC_UC_H */

```
