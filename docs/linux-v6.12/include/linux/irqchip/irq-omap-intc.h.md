---
sidebar_position: 13
---
# irq-omap-intc.h

### ファイル情報

- パス: `linux-v6.12/include/linux/irqchip/irq-omap-intc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/**
 * irq-omap-intc.h - INTC Idle Functions
 *
 * Copyright (C) 2014 Texas Instruments Incorporated - https://www.ti.com
 *
 * Author: Felipe Balbi <balbi@ti.com>
 */

#ifndef __INCLUDE_LINUX_IRQCHIP_IRQ_OMAP_INTC_H
#define __INCLUDE_LINUX_IRQCHIP_IRQ_OMAP_INTC_H

int omap_irq_pending(void);
void omap_intc_save_context(void);
void omap_intc_restore_context(void);
void omap3_intc_suspend(void);
void omap3_intc_prepare_idle(void);
void omap3_intc_resume_idle(void);

#endif /* __INCLUDE_LINUX_IRQCHIP_IRQ_OMAP_INTC_H */

```
