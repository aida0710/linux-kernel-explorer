---
sidebar_position: 6
---
# trace_clock.c

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/kernel/trace/trace_clock.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 *
 * Copyright (C) 2015 Naveen N. Rao, IBM Corporation
 */

#include <asm/trace_clock.h>
#include <asm/time.h>

u64 notrace trace_clock_ppc_tb(void)
{
	return get_tb();
}

```
