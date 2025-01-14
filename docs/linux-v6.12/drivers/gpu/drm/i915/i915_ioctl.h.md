---
sidebar_position: 38
---
# i915_ioctl.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/i915_ioctl.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef __I915_IOCTL_H__
#define __I915_IOCTL_H__

struct drm_device;
struct drm_file;

int i915_reg_read_ioctl(struct drm_device *dev, void *data, struct drm_file *file);

#endif /* __I915_IOCTL_H__ */

```
