---
sidebar_position: 88
---
# tlb.h

### ファイル情報

- パス: `linux-v6.12/arch/parisc/include/asm/tlb.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _PARISC_TLB_H
#define _PARISC_TLB_H

#include <asm-generic/tlb.h>

#if CONFIG_PGTABLE_LEVELS == 3
#define __pmd_free_tlb(tlb, pmd, addr)	pmd_free((tlb)->mm, pmd)
#endif
#define __pte_free_tlb(tlb, pte, addr)	pte_free((tlb)->mm, pte)

#endif

```
