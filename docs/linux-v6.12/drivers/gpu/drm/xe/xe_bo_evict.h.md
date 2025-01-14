---
sidebar_position: 16
---
# xe_bo_evict.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_bo_evict.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_BO_EVICT_H_
#define _XE_BO_EVICT_H_

struct xe_device;

int xe_bo_evict_all(struct xe_device *xe);
int xe_bo_restore_kernel(struct xe_device *xe);
int xe_bo_restore_user(struct xe_device *xe);

#endif

```
