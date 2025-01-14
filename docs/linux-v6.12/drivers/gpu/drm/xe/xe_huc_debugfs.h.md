---
sidebar_position: 161
---
# xe_huc_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_huc_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_HUC_DEBUGFS_H_
#define _XE_HUC_DEBUGFS_H_

struct dentry;
struct xe_huc;

void xe_huc_debugfs_register(struct xe_huc *huc, struct dentry *parent);

#endif

```
