---
sidebar_position: 583
---
# irqhandler.h

### ファイル情報

- パス: `linux-v6.12/include/linux/irqhandler.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LINUX_IRQHANDLER_H
#define _LINUX_IRQHANDLER_H

/*
 * Interrupt flow handler typedefs are defined here to avoid circular
 * include dependencies.
 */

struct irq_desc;

typedef	void (*irq_flow_handler_t)(struct irq_desc *desc);

#endif

```
