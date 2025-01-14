---
sidebar_position: 54
---
# irq_work.h

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/include/asm/irq_work.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_LOONGARCH_IRQ_WORK_H
#define _ASM_LOONGARCH_IRQ_WORK_H

static inline bool arch_irq_work_has_interrupt(void)
{
	return IS_ENABLED(CONFIG_SMP);
}

#endif /* _ASM_LOONGARCH_IRQ_WORK_H */

```
