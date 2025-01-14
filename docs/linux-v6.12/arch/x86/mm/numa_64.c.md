---
sidebar_position: 30
---
# numa_64.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/mm/numa_64.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Generic VM initialization for x86-64 NUMA setups.
 * Copyright 2002,2003 Andi Kleen, SuSE Labs.
 */
#include <linux/memblock.h>

#include "numa_internal.h"

void __init initmem_init(void)
{
	x86_numa_init();
}

```
