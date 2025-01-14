---
sidebar_position: 114
---
# xhci-trace.c

### ファイル情報

- パス: `linux-v6.12/drivers/usb/host/xhci-trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * xHCI host controller driver
 *
 * Copyright (C) 2013 Xenia Ragiadakou
 *
 * Author: Xenia Ragiadakou
 * Email : burzalodowa@gmail.com
 */

#define CREATE_TRACE_POINTS
#include "xhci-trace.h"

EXPORT_TRACEPOINT_SYMBOL_GPL(xhci_dbg_quirks);
EXPORT_TRACEPOINT_SYMBOL_GPL(xhci_dbg_init);

```
