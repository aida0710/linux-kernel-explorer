---
sidebar_position: 299
---
# tlbbatch.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/include/asm/tlbbatch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ARCH_X86_TLBBATCH_H
#define _ARCH_X86_TLBBATCH_H

#include <linux/cpumask.h>

struct arch_tlbflush_unmap_batch {
	/*
	 * Each bit set is a CPU that potentially has a TLB entry for one of
	 * the PFNs being flushed..
	 */
	struct cpumask cpumask;
};

#endif /* _ARCH_X86_TLBBATCH_H */

```
