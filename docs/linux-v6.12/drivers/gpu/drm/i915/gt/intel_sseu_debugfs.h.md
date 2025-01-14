---
sidebar_position: 117
---
# intel_sseu_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_sseu_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */

/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef INTEL_SSEU_DEBUGFS_H
#define INTEL_SSEU_DEBUGFS_H

struct intel_gt;
struct dentry;
struct seq_file;

int intel_sseu_status(struct seq_file *m, struct intel_gt *gt);
void intel_sseu_debugfs_register(struct intel_gt *gt, struct dentry *root);

#endif /* INTEL_SSEU_DEBUGFS_H */

```
