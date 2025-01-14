---
sidebar_position: 107
---
# mmu.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/include/asm/mmu.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __MMU_H
#define __MMU_H

#ifdef CONFIG_MMU
/* Default "unsigned long" context */
typedef unsigned long mm_context_t;
#else
#include <asm-generic/mmu.h>
#endif

#endif

```
