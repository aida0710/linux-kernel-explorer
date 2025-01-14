---
sidebar_position: 85
---
# memblock.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/asm/memblock.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_ARM_MEMBLOCK_H
#define _ASM_ARM_MEMBLOCK_H

struct machine_desc;

void arm_memblock_init(const struct machine_desc *);
phys_addr_t arm_memblock_steal(phys_addr_t size, phys_addr_t align);

#endif

```
