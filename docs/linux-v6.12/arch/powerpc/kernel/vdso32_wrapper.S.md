---
sidebar_position: 160
---
# vdso32_wrapper.S

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/kernel/vdso32_wrapper.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
#include <linux/linkage.h>
#include <asm/page.h>

	__PAGE_ALIGNED_DATA

	.globl vdso32_start, vdso32_end
	.balign PAGE_SIZE
vdso32_start:
	.incbin "arch/powerpc/kernel/vdso/vdso32.so.dbg"
	.balign PAGE_SIZE
vdso32_end:

	.previous

```
