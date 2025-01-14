---
sidebar_position: 136
---
# oplib.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/oplib.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_OPLIB_H
#define ___ASM_SPARC_OPLIB_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/oplib_64.h>
#else
#include <asm/oplib_32.h>
#endif
#endif

```
