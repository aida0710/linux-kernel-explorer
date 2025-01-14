---
sidebar_position: 127
---
# mmu_context.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/mmu_context.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_MMU_CONTEXT_H
#define ___ASM_SPARC_MMU_CONTEXT_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/mmu_context_64.h>
#else
#include <asm/mmu_context_32.h>
#endif
#endif

```
