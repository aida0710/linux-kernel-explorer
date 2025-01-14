---
sidebar_position: 211
---
# timex.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/timex.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_TIMEX_H
#define ___ASM_SPARC_TIMEX_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/timex_64.h>
#else
#include <asm/timex_32.h>
#endif
#endif

```
