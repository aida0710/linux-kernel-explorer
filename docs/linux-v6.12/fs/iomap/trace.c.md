---
sidebar_position: 8
---
# trace.c

### ファイル情報

- パス: `linux-v6.12/fs/iomap/trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (c) 2019 Christoph Hellwig
 */
#include <linux/iomap.h>
#include <linux/uio.h>

/*
 * We include this last to have the helpers above available for the trace
 * event implementations.
 */
#define CREATE_TRACE_POINTS
#include "trace.h"

```
