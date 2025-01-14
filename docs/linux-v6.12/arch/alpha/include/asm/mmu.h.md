---
sidebar_position: 50
---
# mmu.h

### ファイル情報

- パス: `linux-v6.12/arch/alpha/include/asm/mmu.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ALPHA_MMU_H
#define __ALPHA_MMU_H

/* The alpha MMU context is one "unsigned long" bitmap per CPU */
typedef unsigned long mm_context_t[NR_CPUS];

#endif

```
