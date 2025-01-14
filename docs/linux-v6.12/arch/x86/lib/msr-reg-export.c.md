---
sidebar_position: 36
---
# msr-reg-export.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/lib/msr-reg-export.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/export.h>
#include <asm/msr.h>

EXPORT_SYMBOL(rdmsr_safe_regs);
EXPORT_SYMBOL(wrmsr_safe_regs);

```
