---
sidebar_position: 10
---
# error-inject.c

### ファイル情報

- パス: `linux-v6.12/arch/arm64/lib/error-inject.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/error-injection.h>
#include <linux/kprobes.h>

void override_function_with_return(struct pt_regs *regs)
{
	/*
	 * 'regs' represents the state on entry of a predefined function in
	 * the kernel/module and which is captured on a kprobe.
	 *
	 * When kprobe returns back from exception it will override the end
	 * of probed function and directly return to the predefined
	 * function's caller.
	 */
	instruction_pointer_set(regs, procedure_link_pointer(regs));
}
NOKPROBE_SYMBOL(override_function_with_return);

```
