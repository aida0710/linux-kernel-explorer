---
sidebar_position: 124
---
# mmu.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/mmu.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_MMU_H
#define ___ASM_SPARC_MMU_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/mmu_64.h>
#else
#include <asm/mmu_32.h>
#endif
#endif

```
