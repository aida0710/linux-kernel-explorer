---
sidebar_position: 84
---
# vdso32-wrap.S

### ファイル情報

- パス: `linux-v6.12/arch/arm64/kernel/vdso32-wrap.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2012 ARM Limited
 */

#include <linux/init.h>
#include <linux/linkage.h>
#include <linux/const.h>
#include <asm/page.h>

	.globl vdso32_start, vdso32_end
	.section .rodata
	.balign PAGE_SIZE
vdso32_start:
	.incbin "arch/arm64/kernel/vdso32/vdso.so"
	.balign PAGE_SIZE
vdso32_end:

	.previous

```
