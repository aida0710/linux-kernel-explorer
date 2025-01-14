---
sidebar_position: 47
---
# hw_irq.h

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/include/asm/hw_irq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2020-2022 Loongson Technology Corporation Limited
 */
#ifndef __ASM_HW_IRQ_H
#define __ASM_HW_IRQ_H

#include <linux/atomic.h>

extern atomic_t irq_err_count;

#define ARCH_IRQ_INIT_FLAGS	IRQ_NOPROBE

/*
 * interrupt-retrigger: NOP for now. This may not be appropriate for all
 * machines, we'll see ...
 */

#endif /* __ASM_HW_IRQ_H */

```
