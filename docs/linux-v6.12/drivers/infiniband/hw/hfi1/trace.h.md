---
sidebar_position: 68
---
# trace.h

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/hfi1/trace.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 OR BSD-3-Clause */
/*
 * Copyright(c) 2015 - 2018 Intel Corporation.
 */

#define packettype_name(etype) { RHF_RCV_TYPE_##etype, #etype }
#define show_packettype(etype)                  \
__print_symbolic(etype,                         \
	packettype_name(EXPECTED),              \
	packettype_name(EAGER),                 \
	packettype_name(IB),                    \
	packettype_name(ERROR),                 \
	packettype_name(BYPASS))

#include "trace_dbg.h"
#include "trace_misc.h"
#include "trace_ctxts.h"
#include "trace_ibhdrs.h"
#include "trace_rc.h"
#include "trace_rx.h"
#include "trace_tx.h"
#include "trace_mmu.h"
#include "trace_iowait.h"
#include "trace_tid.h"

```
