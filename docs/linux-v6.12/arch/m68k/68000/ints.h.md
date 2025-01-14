---
sidebar_position: 7
---
# ints.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/68000/ints.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */

#include <linux/linkage.h>

struct pt_regs;

asmlinkage void process_int(int vec, struct pt_regs *fp);

```
