---
sidebar_position: 4
---
# error_report-traces.c

### ファイル情報

- パス: `linux-v6.12/kernel/trace/error_report-traces.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Error reporting trace points.
 *
 * Copyright (C) 2021, Google LLC.
 */

#define CREATE_TRACE_POINTS
#include <trace/events/error_report.h>

EXPORT_TRACEPOINT_SYMBOL_GPL(error_report_end);

```
