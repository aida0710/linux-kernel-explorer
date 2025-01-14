---
sidebar_position: 155
---
# pgtable.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/pgtable.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_PGTABLE_H
#define ___ASM_SPARC_PGTABLE_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/pgtable_64.h>
#else
#include <asm/pgtable_32.h>
#endif
#endif

```
