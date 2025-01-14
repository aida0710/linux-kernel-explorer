---
sidebar_position: 19
---
# xe_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_DEBUGFS_H_
#define _XE_DEBUGFS_H_

struct xe_device;

#ifdef CONFIG_DEBUG_FS
void xe_debugfs_register(struct xe_device *xe);
#else
static inline void xe_debugfs_register(struct xe_device *xe) { }
#endif

#endif

```
