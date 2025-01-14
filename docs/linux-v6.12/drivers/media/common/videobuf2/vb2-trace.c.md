---
sidebar_position: 4
---
# vb2-trace.c

### ファイル情報

- パス: `linux-v6.12/drivers/media/common/videobuf2/vb2-trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <media/videobuf2-core.h>

#define CREATE_TRACE_POINTS
#include <trace/events/vb2.h>

EXPORT_TRACEPOINT_SYMBOL_GPL(vb2_buf_done);
EXPORT_TRACEPOINT_SYMBOL_GPL(vb2_buf_queue);
EXPORT_TRACEPOINT_SYMBOL_GPL(vb2_dqbuf);
EXPORT_TRACEPOINT_SYMBOL_GPL(vb2_qbuf);

```
