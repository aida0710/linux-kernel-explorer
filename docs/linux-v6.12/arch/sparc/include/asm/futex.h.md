---
sidebar_position: 72
---
# futex.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/futex.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_FUTEX_H
#define ___ASM_SPARC_FUTEX_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/futex_64.h>
#else
#include <asm/futex_32.h>
#endif
#endif

```
