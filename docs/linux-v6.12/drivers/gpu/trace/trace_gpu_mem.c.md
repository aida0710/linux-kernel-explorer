---
sidebar_position: 3
---
# trace_gpu_mem.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/trace/trace_gpu_mem.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * GPU memory trace points
 *
 * Copyright (C) 2020 Google, Inc.
 */

#include <linux/module.h>

#define CREATE_TRACE_POINTS
#include <trace/events/gpu_mem.h>

EXPORT_TRACEPOINT_SYMBOL(gpu_mem_total);

```
