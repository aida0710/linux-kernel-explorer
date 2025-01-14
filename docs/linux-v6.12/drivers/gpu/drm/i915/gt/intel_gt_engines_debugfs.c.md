---
sidebar_position: 61
---
# intel_gt_engines_debugfs.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_gt_engines_debugfs.c`

### コンテンツ

```c
// SPDX-License-Identifier: MIT

/*
 * Copyright © 2019 Intel Corporation
 */

#include <drm/drm_print.h>

#include "intel_engine.h"
#include "intel_gt.h"
#include "intel_gt_debugfs.h"
#include "intel_gt_engines_debugfs.h"

static int engines_show(struct seq_file *m, void *data)
{
	struct intel_gt *gt = m->private;
	struct intel_engine_cs *engine;
	enum intel_engine_id id;
	struct drm_printer p;

	p = drm_seq_file_printer(m);
	for_each_engine(engine, gt, id)
		intel_engine_dump(engine, &p, "%s\n", engine->name);

	return 0;
}
DEFINE_INTEL_GT_DEBUGFS_ATTRIBUTE(engines);

void intel_gt_engines_debugfs_register(struct intel_gt *gt, struct dentry *root)
{
	static const struct intel_gt_debugfs_file files[] = {
		{ "engines", &engines_fops },
	};

	intel_gt_debugfs_register_files(root, files, ARRAY_SIZE(files), gt);
}

```
