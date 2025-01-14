---
sidebar_position: 302
---
# xe_wait_user_fence.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_wait_user_fence.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_WAIT_USER_FENCE_H_
#define _XE_WAIT_USER_FENCE_H_

struct drm_device;
struct drm_file;

int xe_wait_user_fence_ioctl(struct drm_device *dev, void *data,
			     struct drm_file *file);

#endif

```
