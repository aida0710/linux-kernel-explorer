---
sidebar_position: 16
---
# process.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/kernel/process.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#include <linux/linkage.h>

struct pt_regs;

asmlinkage int m68k_clone(struct pt_regs *regs);
asmlinkage int m68k_clone3(struct pt_regs *regs);

```
