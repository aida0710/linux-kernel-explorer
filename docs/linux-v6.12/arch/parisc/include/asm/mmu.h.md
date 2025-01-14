---
sidebar_position: 48
---
# mmu.h

### ファイル情報

- パス: `linux-v6.12/arch/parisc/include/asm/mmu.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _PARISC_MMU_H_
#define _PARISC_MMU_H_

typedef struct {
	unsigned long space_id;
	unsigned long vdso_base;
} mm_context_t;

#endif /* _PARISC_MMU_H_ */

```
