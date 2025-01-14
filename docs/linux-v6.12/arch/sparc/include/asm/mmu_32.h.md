---
sidebar_position: 125
---
# mmu_32.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/mmu_32.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __MMU_H
#define __MMU_H

/* Default "unsigned long" context */
typedef unsigned long mm_context_t;

/* mm/srmmu.c */
extern ctxd_t *srmmu_ctx_table_phys;

#endif

```
