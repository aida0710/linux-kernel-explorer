---
sidebar_position: 70
---
# hw_irq.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/hw_irq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _HW_IRQ_H
#define _HW_IRQ_H

#include <linux/msi.h>
#include <linux/pci.h>

void __init init_airq_interrupts(void);
void __init init_cio_interrupts(void);

#endif

```
