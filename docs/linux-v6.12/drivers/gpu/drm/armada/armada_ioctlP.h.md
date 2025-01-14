---
sidebar_position: 13
---
# armada_ioctlP.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/armada/armada_ioctlP.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2012 Russell King
 */
#ifndef ARMADA_IOCTLP_H
#define ARMADA_IOCTLP_H

#define ARMADA_IOCTL_PROTO(name)\
extern int armada_##name##_ioctl(struct drm_device *, void *, struct drm_file *)

ARMADA_IOCTL_PROTO(gem_create);
ARMADA_IOCTL_PROTO(gem_mmap);
ARMADA_IOCTL_PROTO(gem_pwrite);

#endif

```
