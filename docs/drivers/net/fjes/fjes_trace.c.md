---
sidebar_position: 8
---
# fjes_trace.c

### ファイル情報

- パス: `drivers/net/fjes/fjes_trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 *  FUJITSU Extended Socket Network Device driver
 *  Copyright (c) 2015-2016 FUJITSU LIMITED
 */

#include <linux/module.h>

#ifndef __CHECKER__
#include "fjes_hw.h"

#define CREATE_TRACE_POINTS
#include "fjes_trace.h"

#endif /* __CHECKER__ */

```
