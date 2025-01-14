---
sidebar_position: 114
---
# trace_clock.h

### ファイル情報

- パス: `linux-v6.12/include/asm-generic/trace_clock.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_GENERIC_TRACE_CLOCK_H
#define _ASM_GENERIC_TRACE_CLOCK_H
/*
 * Arch-specific trace clocks.
 */

/*
 * Additional trace clocks added to the trace_clocks
 * array in kernel/trace/trace.c
 * None if the architecture has not defined it.
 */
#ifndef ARCH_TRACE_CLOCKS
# define ARCH_TRACE_CLOCKS
#endif

#endif  /* _ASM_GENERIC_TRACE_CLOCK_H */

```
