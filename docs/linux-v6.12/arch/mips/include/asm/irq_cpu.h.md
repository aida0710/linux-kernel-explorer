---
sidebar_position: 82
---
# irq_cpu.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/irq_cpu.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 *	include/asm-mips/irq_cpu.h
 *
 *	MIPS CPU interrupt definitions.
 *
 *	Copyright (C) 2002  Maciej W. Rozycki
 */
#ifndef _ASM_IRQ_CPU_H
#define _ASM_IRQ_CPU_H

extern void mips_cpu_irq_init(void);

#ifdef CONFIG_IRQ_DOMAIN
struct device_node;
extern int mips_cpu_irq_of_init(struct device_node *of_node,
				struct device_node *parent);
#endif

#endif /* _ASM_IRQ_CPU_H */

```
