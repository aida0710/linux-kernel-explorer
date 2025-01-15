---
sidebar_position: 52
---
# trace.c

### ファイル情報

- パス: `drivers/net/wireless/ath/ath10k/trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: ISC
/*
 * Copyright (c) 2012 Qualcomm Atheros, Inc.
 */

#include <linux/module.h>

#define CREATE_TRACE_POINTS
#include "trace.h"
EXPORT_SYMBOL(__tracepoint_ath10k_log_dbg);

```
