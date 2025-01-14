---
sidebar_position: 285
---
# xe_uc_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_uc_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_UC_DEBUGFS_H_
#define _XE_UC_DEBUGFS_H_

struct dentry;
struct xe_uc;

void xe_uc_debugfs_register(struct xe_uc *uc, struct dentry *parent);

#endif

```
