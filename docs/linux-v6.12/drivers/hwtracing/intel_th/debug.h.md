---
sidebar_position: 4
---
# debug.h

### ファイル情報

- パス: `linux-v6.12/drivers/hwtracing/intel_th/debug.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Intel(R) Trace Hub driver debugging
 *
 * Copyright (C) 2014-2015 Intel Corporation.
 */

#ifndef __INTEL_TH_DEBUG_H__
#define __INTEL_TH_DEBUG_H__

#ifdef CONFIG_INTEL_TH_DEBUG
extern struct dentry *intel_th_dbg;

void intel_th_debug_init(void);
void intel_th_debug_done(void);
#else
static inline void intel_th_debug_init(void)
{
}

static inline void intel_th_debug_done(void)
{
}
#endif

#endif /* __INTEL_TH_DEBUG_H__ */

```
