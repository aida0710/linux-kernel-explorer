---
sidebar_position: 282
---
# trace_clock.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/asm/trace_clock.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 *
 * Copyright (C) 2015 Naveen N. Rao, IBM Corporation
 */

#ifndef _ASM_PPC_TRACE_CLOCK_H
#define _ASM_PPC_TRACE_CLOCK_H

#include <linux/compiler.h>
#include <linux/types.h>

extern u64 notrace trace_clock_ppc_tb(void);

#define ARCH_TRACE_CLOCKS { trace_clock_ppc_tb, "ppc-tb", 0 },

#endif  /* _ASM_PPC_TRACE_CLOCK_H */

```
