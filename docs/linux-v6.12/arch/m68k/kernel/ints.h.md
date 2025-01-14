---
sidebar_position: 9
---
# ints.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/kernel/ints.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */

#include <linux/linkage.h>

struct pt_regs;

asmlinkage void handle_badint(struct pt_regs *regs);

```
