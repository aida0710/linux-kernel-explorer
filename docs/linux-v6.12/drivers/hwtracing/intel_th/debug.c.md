---
sidebar_position: 3
---
# debug.c

### ファイル情報

- パス: `linux-v6.12/drivers/hwtracing/intel_th/debug.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Intel(R) Trace Hub driver debugging
 *
 * Copyright (C) 2014-2015 Intel Corporation.
 */

#include <linux/types.h>
#include <linux/device.h>
#include <linux/debugfs.h>

#include "intel_th.h"
#include "debug.h"

struct dentry *intel_th_dbg;

void intel_th_debug_init(void)
{
	intel_th_dbg = debugfs_create_dir("intel_th", NULL);
	if (IS_ERR(intel_th_dbg))
		intel_th_dbg = NULL;
}

void intel_th_debug_done(void)
{
	debugfs_remove(intel_th_dbg);
	intel_th_dbg = NULL;
}

```
