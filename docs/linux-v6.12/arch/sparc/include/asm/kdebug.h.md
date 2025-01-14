---
sidebar_position: 106
---
# kdebug.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/kdebug.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_KDEBUG_H
#define ___ASM_SPARC_KDEBUG_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/kdebug_64.h>
#else
#include <asm/kdebug_32.h>
#endif
#endif

```
