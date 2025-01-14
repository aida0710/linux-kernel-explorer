---
sidebar_position: 11
---
# ioctl.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvkm/core/ioctl.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVKM_IOCTL_H__
#define __NVKM_IOCTL_H__
#include <core/os.h>
struct nvkm_client;

int nvkm_ioctl(struct nvkm_client *, void *, u32, void **);
#endif

```
