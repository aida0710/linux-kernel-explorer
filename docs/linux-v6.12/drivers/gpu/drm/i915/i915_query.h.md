---
sidebar_position: 62
---
# i915_query.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/i915_query.h`

### コンテンツ

```h
/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright © 2018 Intel Corporation
 */

#ifndef _I915_QUERY_H_
#define _I915_QUERY_H_

struct drm_device;
struct drm_file;

int i915_query_ioctl(struct drm_device *dev, void *data, struct drm_file *file);

#endif

```
