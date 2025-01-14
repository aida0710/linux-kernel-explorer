---
sidebar_position: 2
---
# ivpu_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/accel/ivpu/ivpu_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2020-2023 Intel Corporation
 */

#ifndef __IVPU_DEBUGFS_H__
#define __IVPU_DEBUGFS_H__

struct ivpu_device;

#if defined(CONFIG_DEBUG_FS)
void ivpu_debugfs_init(struct ivpu_device *vdev);
#else
static inline void ivpu_debugfs_init(struct ivpu_device *vdev) { }
#endif

#endif /* __IVPU_DEBUGFS_H__ */

```
