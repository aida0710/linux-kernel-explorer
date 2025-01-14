---
sidebar_position: 43
---
# debug.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/debug.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Copyright (C) 2015 Imagination Technologies
 */

#ifndef __MIPS_ASM_DEBUG_H__
#define __MIPS_ASM_DEBUG_H__

#include <linux/dcache.h>

/*
 * mips_debugfs_dir corresponds to the "mips" directory at the top level
 * of the DebugFS hierarchy. MIPS-specific DebugFS entries should be
 * placed beneath this directory.
 */
extern struct dentry *mips_debugfs_dir;

#endif /* __MIPS_ASM_DEBUG_H__ */

```
