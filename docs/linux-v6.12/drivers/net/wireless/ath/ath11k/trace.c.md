---
sidebar_position: 63
---
# trace.c

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/ath/ath11k/trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: BSD-3-Clause-Clear
/*
 * Copyright (c) 2019 The Linux Foundation. All rights reserved.
 */

#include <linux/module.h>

#define CREATE_TRACE_POINTS
#include "trace.h"
EXPORT_SYMBOL(__tracepoint_ath11k_log_dbg);

```
