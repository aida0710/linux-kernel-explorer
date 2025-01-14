---
sidebar_position: 8
---
# gprof_syms.c

### ファイル情報

- パス: `linux-v6.12/arch/um/kernel/gprof_syms.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* 
 * Copyright (C) 2001 - 2007 Jeff Dike (jdike@{addtoit,linux.intel}.com)
 */

#include <linux/module.h>

extern void mcount(void);
EXPORT_SYMBOL(mcount);

```
