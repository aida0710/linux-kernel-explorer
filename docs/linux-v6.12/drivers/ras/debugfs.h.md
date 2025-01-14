---
sidebar_position: 3
---
# debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/ras/debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __RAS_DEBUGFS_H__
#define __RAS_DEBUGFS_H__

#include <linux/debugfs.h>

#if IS_ENABLED(CONFIG_DEBUG_FS)
struct dentry *ras_get_debugfs_root(void);
#else
static inline struct dentry *ras_get_debugfs_root(void) { return NULL; }
#endif /* DEBUG_FS */

#endif /* __RAS_DEBUGFS_H__ */

```
