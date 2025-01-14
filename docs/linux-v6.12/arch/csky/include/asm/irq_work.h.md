---
sidebar_position: 20
---
# irq_work.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/include/asm/irq_work.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __ASM_CSKY_IRQ_WORK_H
#define __ASM_CSKY_IRQ_WORK_H

static inline bool arch_irq_work_has_interrupt(void)
{
	return true;
}

#endif /* __ASM_CSKY_IRQ_WORK_H */

```
