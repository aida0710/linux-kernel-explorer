---
sidebar_position: 13
---
# extable_32.c

### ファイル情報

- パス: `linux-v6.12/arch/sh/mm/extable_32.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * linux/arch/sh/mm/extable.c
 *  Taken from:
 *   linux/arch/i386/mm/extable.c
 */

#include <linux/extable.h>
#include <linux/uaccess.h>

#include <asm/ptrace.h>

int fixup_exception(struct pt_regs *regs)
{
	const struct exception_table_entry *fixup;

	fixup = search_exception_tables(regs->pc);
	if (fixup) {
		regs->pc = fixup->fixup;
		return 1;
	}

	return 0;
}

```
