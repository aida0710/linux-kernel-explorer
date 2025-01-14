---
sidebar_position: 34
---
# xe_exec.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_exec.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_EXEC_H_
#define _XE_EXEC_H_

struct drm_device;
struct drm_file;

int xe_exec_ioctl(struct drm_device *dev, void *data, struct drm_file *file);

#endif

```
