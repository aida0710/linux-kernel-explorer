---
sidebar_position: 249
---
# intel_sprite_uapi.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_sprite_uapi.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef __INTEL_SPRITE_UAPI_H__
#define __INTEL_SPRITE_UAPI_H__

struct drm_device;
struct drm_file;

int intel_sprite_set_colorkey_ioctl(struct drm_device *dev, void *data,
				    struct drm_file *file_priv);

#endif /* __INTEL_SPRITE_UAPI_H__ */

```
