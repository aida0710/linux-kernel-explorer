---
sidebar_position: 7
---
# vdso.S

### ファイル情報

- パス: `linux-v6.12/arch/csky/kernel/vdso/vdso.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0-only */

#include <linux/init.h>
#include <linux/linkage.h>
#include <asm/page.h>

	__PAGE_ALIGNED_DATA

	.globl vdso_start, vdso_end
	.balign PAGE_SIZE
vdso_start:
	.incbin "arch/csky/kernel/vdso/vdso.so"
	.balign PAGE_SIZE
vdso_end:

	.previous

```
