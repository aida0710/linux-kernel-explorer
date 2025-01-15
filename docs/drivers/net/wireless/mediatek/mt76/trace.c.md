---
sidebar_position: 59
---
# trace.c

### ファイル情報

- パス: `drivers/net/wireless/mediatek/mt76/trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: ISC
/*
 * Copyright (C) 2016 Felix Fietkau <nbd@nbd.name>
 */

#include <linux/module.h>

#ifndef __CHECKER__
#define CREATE_TRACE_POINTS
#include "trace.h"

EXPORT_TRACEPOINT_SYMBOL_GPL(mac_txdone);
EXPORT_TRACEPOINT_SYMBOL_GPL(dev_irq);

#endif

```
