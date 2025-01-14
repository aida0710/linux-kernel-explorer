---
sidebar_position: 2
---
# bugs_64.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/um/bugs_64.c`

### コンテンツ

```c
/*
 * Copyright 2003 PathScale, Inc.
 *
 * Licensed under the GPL
 */

#include <arch.h>
#include <sysdep/ptrace.h>

void arch_check_bugs(void)
{
}

void arch_examine_signal(int sig, struct uml_pt_regs *regs)
{
}

```
