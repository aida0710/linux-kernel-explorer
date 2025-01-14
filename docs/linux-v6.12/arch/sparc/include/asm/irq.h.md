---
sidebar_position: 98
---
# irq.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/irq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_IRQ_H
#define ___ASM_SPARC_IRQ_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/irq_64.h>
#else
#include <asm/irq_32.h>
#endif
#endif

```
