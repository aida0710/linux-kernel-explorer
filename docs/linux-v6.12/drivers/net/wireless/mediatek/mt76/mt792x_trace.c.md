---
sidebar_position: 50
---
# mt792x_trace.c

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/mediatek/mt76/mt792x_trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: ISC
/*
 * Copyright (C) 2023 Lorenzo Bianconi <lorenzo@kernel.org>
 */

#include <linux/module.h>

#ifndef __CHECKER__
#define CREATE_TRACE_POINTS
#include "mt792x_trace.h"

EXPORT_TRACEPOINT_SYMBOL_GPL(lp_event);

#endif

```
