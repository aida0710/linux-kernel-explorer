---
sidebar_position: 110
---
# sparsemem.h

### ファイル情報

- パス: `linux-v6.12/arch/riscv/include/asm/sparsemem.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef _ASM_RISCV_SPARSEMEM_H
#define _ASM_RISCV_SPARSEMEM_H

#ifdef CONFIG_SPARSEMEM
#ifdef CONFIG_64BIT
#define MAX_PHYSMEM_BITS	56
#else
#define MAX_PHYSMEM_BITS	32
#endif /* CONFIG_64BIT */
#define SECTION_SIZE_BITS	27
#endif /* CONFIG_SPARSEMEM */

#endif /* _ASM_RISCV_SPARSEMEM_H */

```
