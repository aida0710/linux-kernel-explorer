---
sidebar_position: 19
---
# trace.c

### ファイル情報

- パス: `net/sunrpc/auth_gss/trace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (c) 2018, 2019 Oracle. All rights reserved.
 */

#include <linux/sunrpc/clnt.h>
#include <linux/sunrpc/sched.h>
#include <linux/sunrpc/svc.h>
#include <linux/sunrpc/svc_xprt.h>
#include <linux/sunrpc/auth_gss.h>
#include <linux/sunrpc/gss_err.h>

#define CREATE_TRACE_POINTS
#include <trace/events/rpcgss.h>

```
