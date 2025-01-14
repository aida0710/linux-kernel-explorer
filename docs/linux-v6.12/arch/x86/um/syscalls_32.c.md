---
sidebar_position: 17
---
# syscalls_32.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/um/syscalls_32.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/syscalls.h>
#include <os.h>

SYSCALL_DEFINE2(arch_prctl, int, option, unsigned long, arg2)
{
	return -EINVAL;
}

```
