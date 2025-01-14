---
sidebar_position: 161
---
# vdso64_wrapper.S

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/kernel/vdso64_wrapper.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
#include <linux/linkage.h>
#include <asm/page.h>

	__PAGE_ALIGNED_DATA

	.globl vdso64_start, vdso64_end
	.balign PAGE_SIZE
vdso64_start:
	.incbin "arch/powerpc/kernel/vdso/vdso64.so.dbg"
	.balign PAGE_SIZE
vdso64_end:

	.previous

```
