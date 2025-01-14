---
sidebar_position: 29
---
# v4l2-trace.c

### ファイル情報

- パス: `linux-v6.12/drivers/media/v4l2-core/v4l2-trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <media/v4l2-common.h>
#include <media/v4l2-fh.h>
#include <media/videobuf2-v4l2.h>

#define CREATE_TRACE_POINTS
#include <trace/events/v4l2.h>

EXPORT_TRACEPOINT_SYMBOL_GPL(vb2_v4l2_buf_done);
EXPORT_TRACEPOINT_SYMBOL_GPL(vb2_v4l2_buf_queue);
EXPORT_TRACEPOINT_SYMBOL_GPL(vb2_v4l2_dqbuf);
EXPORT_TRACEPOINT_SYMBOL_GPL(vb2_v4l2_qbuf);

```
