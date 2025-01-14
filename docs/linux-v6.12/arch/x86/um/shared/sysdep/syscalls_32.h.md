---
sidebar_position: 17
---
# syscalls_32.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/um/shared/sysdep/syscalls_32.h`

### コンテンツ

```h
/* 
 * Copyright (C) 2000 - 2008 Jeff Dike (jdike@{addtoit,linux.intel}.com)
 * Licensed under the GPL
 */

#include <asm/unistd.h>
#include <sysdep/ptrace.h>

typedef long syscall_handler_t(struct syscall_args);

extern syscall_handler_t *sys_call_table[];

#define EXECUTE_SYSCALL(syscall, regs) \
	((*sys_call_table[syscall]))(SYSCALL_ARGS(&regs->regs))

```
