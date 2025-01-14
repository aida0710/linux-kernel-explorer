---
sidebar_position: 18
---
# ptrace.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/kernel/ptrace.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */

#include <linux/linkage.h>

asmlinkage int syscall_trace_enter(void);
asmlinkage void syscall_trace_leave(void);

```
