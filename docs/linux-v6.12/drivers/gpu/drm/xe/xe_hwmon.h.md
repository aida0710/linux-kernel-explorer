---
sidebar_position: 164
---
# xe_hwmon.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_hwmon.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _XE_HWMON_H_
#define _XE_HWMON_H_

#include <linux/types.h>

struct xe_device;

#if IS_REACHABLE(CONFIG_HWMON)
void xe_hwmon_register(struct xe_device *xe);
#else
static inline void xe_hwmon_register(struct xe_device *xe) { };
#endif

#endif /* _XE_HWMON_H_ */

```
