---
sidebar_position: 3
---
# tlbflush.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/asm/book3s/tlbflush.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_POWERPC_BOOK3S_TLBFLUSH_H
#define _ASM_POWERPC_BOOK3S_TLBFLUSH_H

#ifdef CONFIG_PPC64
#include <asm/book3s/64/tlbflush.h>
#else
#include <asm/book3s/32/tlbflush.h>
#endif

#endif /* _ASM_POWERPC_BOOK3S_TLBFLUSH_H */

```
