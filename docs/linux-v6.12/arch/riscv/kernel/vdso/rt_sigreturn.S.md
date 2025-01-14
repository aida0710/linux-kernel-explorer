---
sidebar_position: 8
---
# rt_sigreturn.S

### ファイル情報

- パス: `linux-v6.12/arch/riscv/kernel/vdso/rt_sigreturn.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2014 Regents of the University of California
 */

#include <linux/linkage.h>
#include <asm/unistd.h>

	.text
SYM_FUNC_START(__vdso_rt_sigreturn)
	.cfi_startproc
	.cfi_signal_frame
	li a7, __NR_rt_sigreturn
	ecall
	.cfi_endproc
SYM_FUNC_END(__vdso_rt_sigreturn)

```
