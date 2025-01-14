---
sidebar_position: 5
---
# trace.c

### ファイル情報

- パス: `linux-v6.12/drivers/block/null_blk/trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * null_blk trace related helpers.
 *
 * Copyright (C) 2020 Western Digital Corporation or its affiliates.
 */
#include "trace.h"

/*
 * Helper to use for all null_blk traces to extract disk name.
 */
const char *nullb_trace_disk_name(struct trace_seq *p, char *name)
{
	const char *ret = trace_seq_buffer_ptr(p);

	if (name && *name)
		trace_seq_printf(p, "disk=%s, ", name);
	trace_seq_putc(p, 0);

	return ret;
}

```
