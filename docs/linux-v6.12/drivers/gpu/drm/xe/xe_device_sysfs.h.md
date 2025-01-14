---
sidebar_position: 26
---
# xe_device_sysfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_device_sysfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _XE_DEVICE_SYSFS_H_
#define _XE_DEVICE_SYSFS_H_

struct xe_device;

int xe_device_sysfs_init(struct xe_device *xe);

#endif

```
