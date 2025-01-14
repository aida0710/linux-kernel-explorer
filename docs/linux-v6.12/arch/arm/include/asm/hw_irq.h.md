---
sidebar_position: 63
---
# hw_irq.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/asm/hw_irq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Nothing to see here yet
 */
#ifndef _ARCH_ARM_HW_IRQ_H
#define _ARCH_ARM_HW_IRQ_H

static inline void ack_bad_irq(int irq)
{
	extern unsigned long irq_err_count;
	irq_err_count++;
	pr_crit("unexpected IRQ trap at vector %02x\n", irq);
}

#define ARCH_IRQ_INIT_FLAGS	(IRQ_NOREQUEST | IRQ_NOPROBE)

#endif

```
