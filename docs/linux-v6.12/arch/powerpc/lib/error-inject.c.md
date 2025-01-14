---
sidebar_position: 13
---
# error-inject.c

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/lib/error-inject.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0+

#include <linux/error-injection.h>
#include <linux/kprobes.h>
#include <linux/uaccess.h>

void override_function_with_return(struct pt_regs *regs)
{
	/*
	 * Emulate 'blr'. 'regs' represents the state on entry of a predefined
	 * function in the kernel/module, captured on a kprobe. We don't need
	 * to worry about 32-bit userspace on a 64-bit kernel.
	 */
	regs_set_return_ip(regs, regs->link);
}
NOKPROBE_SYMBOL(override_function_with_return);

```
