---
sidebar_position: 16
---
# branch.h

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/include/asm/branch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2020-2022 Loongson Technology Corporation Limited
 */
#ifndef _ASM_BRANCH_H
#define _ASM_BRANCH_H

#include <asm/ptrace.h>

static inline unsigned long exception_era(struct pt_regs *regs)
{
	return regs->csr_era;
}

static inline void compute_return_era(struct pt_regs *regs)
{
	regs->csr_era += 4;
}

#endif /* _ASM_BRANCH_H */

```
