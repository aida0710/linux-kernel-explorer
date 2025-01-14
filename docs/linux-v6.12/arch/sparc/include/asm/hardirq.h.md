---
sidebar_position: 75
---
# hardirq.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/hardirq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_HARDIRQ_H
#define ___ASM_SPARC_HARDIRQ_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/hardirq_64.h>
#else
#include <asm/hardirq_32.h>
#endif
#endif

```
