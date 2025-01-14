---
sidebar_position: 20
---
# bitops.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/bitops.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_BITOPS_H
#define ___ASM_SPARC_BITOPS_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/bitops_64.h>
#else
#include <asm/bitops_32.h>
#endif
#endif

```
