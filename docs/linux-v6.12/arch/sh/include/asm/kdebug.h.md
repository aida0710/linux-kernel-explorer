---
sidebar_position: 63
---
# kdebug.h

### ファイル情報

- パス: `linux-v6.12/arch/sh/include/asm/kdebug.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_SH_KDEBUG_H
#define __ASM_SH_KDEBUG_H

/* Grossly misnamed. */
enum die_val {
	DIE_TRAP,
	DIE_NMI,
	DIE_OOPS,
	DIE_BREAKPOINT,
	DIE_SSTEP,
};

/* arch/sh/kernel/dumpstack.c */
extern void printk_address(unsigned long address, int reliable);
extern void dump_mem(const char *str, const char *loglvl,
		     unsigned long bottom, unsigned long top);

#endif /* __ASM_SH_KDEBUG_H */

```
