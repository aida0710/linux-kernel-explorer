---
sidebar_position: 5
---
# error-inject.c

### ファイル情報

- パス: `linux-v6.12/arch/riscv/lib/error-inject.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/error-injection.h>
#include <linux/kprobes.h>

void override_function_with_return(struct pt_regs *regs)
{
	instruction_pointer_set(regs, regs->ra);
}
NOKPROBE_SYMBOL(override_function_with_return);

```
