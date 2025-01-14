---
sidebar_position: 77
---
# irq_work.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/irq_work.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_S390_IRQ_WORK_H
#define _ASM_S390_IRQ_WORK_H

static inline bool arch_irq_work_has_interrupt(void)
{
	return true;
}

#endif /* _ASM_S390_IRQ_WORK_H */

```
