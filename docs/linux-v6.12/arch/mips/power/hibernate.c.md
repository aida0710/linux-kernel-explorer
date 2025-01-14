---
sidebar_position: 2
---
# hibernate.c

### ファイル情報

- パス: `linux-v6.12/arch/mips/power/hibernate.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/suspend.h>
#include <asm/tlbflush.h>

extern int restore_image(void);

int swsusp_arch_resume(void)
{
	/* Avoid TLB mismatch during and after kernel resume */
	local_flush_tlb_all();
	return restore_image();
}

```
