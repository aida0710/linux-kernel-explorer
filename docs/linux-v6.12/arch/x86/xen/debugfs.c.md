---
sidebar_position: 2
---
# debugfs.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/xen/debugfs.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/init.h>
#include <linux/debugfs.h>
#include <linux/slab.h>

#include "xen-ops.h"

static struct dentry *d_xen_debug;

struct dentry * __init xen_init_debugfs(void)
{
	if (!d_xen_debug)
		d_xen_debug = debugfs_create_dir("xen", NULL);
	return d_xen_debug;
}


```
