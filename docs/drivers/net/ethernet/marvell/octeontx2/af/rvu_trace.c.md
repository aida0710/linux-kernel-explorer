---
sidebar_position: 41
---
# rvu_trace.c

### ファイル情報

- パス: `drivers/net/ethernet/marvell/octeontx2/af/rvu_trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Marvell RVU Admin Function driver
 *
 * Copyright (C) 2020 Marvell.
 *
 */

#define CREATE_TRACE_POINTS
#include "rvu_trace.h"

EXPORT_TRACEPOINT_SYMBOL(otx2_msg_alloc);
EXPORT_TRACEPOINT_SYMBOL(otx2_msg_interrupt);
EXPORT_TRACEPOINT_SYMBOL(otx2_msg_process);

```
