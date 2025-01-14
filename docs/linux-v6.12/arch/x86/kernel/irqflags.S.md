---
sidebar_position: 49
---
# irqflags.S

### ファイル情報

- パス: `linux-v6.12/arch/x86/kernel/irqflags.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */

#include <asm/asm.h>
#include <linux/export.h>
#include <linux/linkage.h>

/*
 * unsigned long native_save_fl(void)
 */
.pushsection .noinstr.text, "ax"
SYM_FUNC_START(native_save_fl)
	pushf
	pop %_ASM_AX
	RET
SYM_FUNC_END(native_save_fl)
.popsection
EXPORT_SYMBOL(native_save_fl)

```
