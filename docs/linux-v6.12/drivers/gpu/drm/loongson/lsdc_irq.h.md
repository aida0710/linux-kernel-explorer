---
sidebar_position: 18
---
# lsdc_irq.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/loongson/lsdc_irq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/*
 * Copyright (C) 2023 Loongson Technology Corporation Limited
 */

#ifndef __LSDC_IRQ_H__
#define __LSDC_IRQ_H__

#include <linux/irqreturn.h>

#include "lsdc_drv.h"

irqreturn_t ls7a1000_dc_irq_handler(int irq, void *arg);
irqreturn_t ls7a2000_dc_irq_handler(int irq, void *arg);

#endif

```
