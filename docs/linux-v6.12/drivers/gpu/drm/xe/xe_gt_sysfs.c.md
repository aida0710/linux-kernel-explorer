---
sidebar_position: 107
---
# xe_gt_sysfs.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_gt_sysfs.c`

### コンテンツ

```c
// SPDX-License-Identifier: MIT
/*
 * Copyright © 2022 Intel Corporation
 */

#include "xe_gt_sysfs.h"

#include <linux/kobject.h>
#include <linux/sysfs.h>

#include <drm/drm_managed.h>

#include "xe_gt.h"

static void xe_gt_sysfs_kobj_release(struct kobject *kobj)
{
	kfree(kobj);
}

static const struct kobj_type xe_gt_sysfs_kobj_type = {
	.release = xe_gt_sysfs_kobj_release,
	.sysfs_ops = &kobj_sysfs_ops,
};

static void gt_sysfs_fini(void *arg)
{
	struct xe_gt *gt = arg;

	kobject_put(gt->sysfs);
}

int xe_gt_sysfs_init(struct xe_gt *gt)
{
	struct xe_tile *tile = gt_to_tile(gt);
	struct xe_device *xe = gt_to_xe(gt);
	struct kobj_gt *kg;
	int err;

	kg = kzalloc(sizeof(*kg), GFP_KERNEL);
	if (!kg)
		return -ENOMEM;

	kobject_init(&kg->base, &xe_gt_sysfs_kobj_type);
	kg->gt = gt;

	err = kobject_add(&kg->base, tile->sysfs, "gt%d", gt->info.id);
	if (err) {
		kobject_put(&kg->base);
		return err;
	}

	gt->sysfs = &kg->base;

	return devm_add_action_or_reset(xe->drm.dev, gt_sysfs_fini, gt);
}

```
