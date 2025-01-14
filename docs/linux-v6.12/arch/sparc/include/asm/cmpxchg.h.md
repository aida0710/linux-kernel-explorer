---
sidebar_position: 38
---
# cmpxchg.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/cmpxchg.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_CMPXCHG_H
#define ___ASM_SPARC_CMPXCHG_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/cmpxchg_64.h>
#else
#include <asm/cmpxchg_32.h>
#endif
#endif

```
