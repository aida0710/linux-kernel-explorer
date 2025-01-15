---
sidebar_position: 18
---
# openvswitch_trace.c

### ファイル情報

- パス: `net/openvswitch/openvswitch_trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* bug in tracepoint.h, it should include this */
#include <linux/module.h>

/* sparse isn't too happy with all macros... */
#ifndef __CHECKER__
#define CREATE_TRACE_POINTS
#include "openvswitch_trace.h"

#endif

```
