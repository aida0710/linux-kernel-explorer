---
sidebar_position: 6
---
# vdso32_wrapper.S

### ファイル情報

- パス: `linux-v6.12/arch/s390/kernel/vdso32/vdso32_wrapper.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
#include <linux/init.h>
#include <linux/linkage.h>
#include <asm/page.h>

	__PAGE_ALIGNED_DATA

	.globl vdso32_start, vdso32_end
	.balign PAGE_SIZE
vdso32_start:
	.incbin "arch/s390/kernel/vdso32/vdso32.so"
	.balign PAGE_SIZE
vdso32_end:

	.previous

```
