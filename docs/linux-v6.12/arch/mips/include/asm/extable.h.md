---
sidebar_position: 59
---
# extable.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/extable.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_EXTABLE_H
#define _ASM_EXTABLE_H

struct exception_table_entry
{
	unsigned long insn;
	unsigned long nextinsn;
};

struct pt_regs;
extern int fixup_exception(struct pt_regs *regs);

#endif

```
