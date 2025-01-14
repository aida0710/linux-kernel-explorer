---
sidebar_position: 214
---
# tlb.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/tlb.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_TLB_H
#define ___ASM_SPARC_TLB_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/tlb_64.h>
#else
#include <asm/tlb_32.h>
#endif
#endif

```
