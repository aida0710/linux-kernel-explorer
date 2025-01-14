---
sidebar_position: 4
---
# processor.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/include/asm/vdso/processor.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2020 ARM Ltd.
 */
#ifndef __ASM_VDSO_PROCESSOR_H
#define __ASM_VDSO_PROCESSOR_H

#ifndef __ASSEMBLY__

/* REP NOP (PAUSE) is a good thing to insert into busy-wait loops. */
static __always_inline void rep_nop(void)
{
	asm volatile("rep; nop" ::: "memory");
}

static __always_inline void cpu_relax(void)
{
	rep_nop();
}

struct getcpu_cache;

notrace long __vdso_getcpu(unsigned *cpu, unsigned *node, struct getcpu_cache *unused);

#endif /* __ASSEMBLY__ */

#endif /* __ASM_VDSO_PROCESSOR_H */

```
