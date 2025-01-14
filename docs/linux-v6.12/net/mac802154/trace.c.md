---
sidebar_position: 15
---
# trace.c

### ファイル情報

- パス: `linux-v6.12/net/mac802154/trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/module.h>

#ifndef __CHECKER__
#include <net/cfg802154.h>
#include "driver-ops.h"
#define CREATE_TRACE_POINTS
#include "trace.h"

#endif

```
