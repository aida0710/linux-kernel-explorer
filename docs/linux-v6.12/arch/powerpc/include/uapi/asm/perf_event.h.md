---
sidebar_position: 24
---
# perf_event.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/uapi/asm/perf_event.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
/*
 * Copyright 2013 Michael Ellerman, IBM Corp.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; version 2 of the
 * License.
 */

#ifndef _UAPI_ASM_POWERPC_PERF_EVENT_H
#define _UAPI_ASM_POWERPC_PERF_EVENT_H

/*
 * We use bit 63 of perf_event_attr.config as a flag to request EBB.
 */
#define PERF_EVENT_CONFIG_EBB_SHIFT	63

#endif /* _UAPI_ASM_POWERPC_PERF_EVENT_H */

```
