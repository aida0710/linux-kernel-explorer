---
sidebar_position: 123
---
# tlbbatch.h

### ファイル情報

- パス: `linux-v6.12/arch/riscv/include/asm/tlbbatch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2023 Rivos Inc.
 */

#ifndef _ASM_RISCV_TLBBATCH_H
#define _ASM_RISCV_TLBBATCH_H

#include <linux/cpumask.h>

struct arch_tlbflush_unmap_batch {
	struct cpumask cpumask;
};

#endif /* _ASM_RISCV_TLBBATCH_H */

```
