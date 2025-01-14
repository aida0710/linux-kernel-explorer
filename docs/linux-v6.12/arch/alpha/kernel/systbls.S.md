---
sidebar_position: 54
---
# systbls.S

### ファイル情報

- パス: `linux-v6.12/arch/alpha/kernel/systbls.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * arch/alpha/kernel/systbls.S
 *
 * The system call table. 
 */

#include <asm/unistd.h>

#define __SYSCALL(nr, entry) .quad entry
	.data
	.align 3
	.globl sys_call_table
sys_call_table:
#include <asm/syscall_table.h>

```
