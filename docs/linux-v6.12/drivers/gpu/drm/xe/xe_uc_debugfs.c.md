---
sidebar_position: 284
---
# xe_uc_debugfs.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_uc_debugfs.c`

### コンテンツ

```c
// SPDX-License-Identifier: MIT
/*
 * Copyright © 2022 Intel Corporation
 */

#include <linux/debugfs.h>

#include <drm/drm_debugfs.h>

#include "xe_gt.h"
#include "xe_gsc_debugfs.h"
#include "xe_guc_debugfs.h"
#include "xe_huc_debugfs.h"
#include "xe_macros.h"
#include "xe_uc_debugfs.h"

void xe_uc_debugfs_register(struct xe_uc *uc, struct dentry *parent)
{
	struct dentry *root;

	root = debugfs_create_dir("uc", parent);
	if (IS_ERR(root)) {
		XE_WARN_ON("Create UC directory failed");
		return;
	}

	xe_gsc_debugfs_register(&uc->gsc, root);
	xe_guc_debugfs_register(&uc->guc, root);
	xe_huc_debugfs_register(&uc->huc, root);
}

```
