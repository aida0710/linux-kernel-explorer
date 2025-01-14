---
sidebar_position: 24
---
# signal.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/kernel/signal.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */

#include <linux/linkage.h>

asmlinkage void do_notify_resume(struct pt_regs *regs);
asmlinkage void *do_sigreturn(struct pt_regs *regs, struct switch_stack *sw);
asmlinkage void *do_rt_sigreturn(struct pt_regs *regs, struct switch_stack *sw);

```
