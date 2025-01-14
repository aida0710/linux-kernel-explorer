---
sidebar_position: 16
---
# nvjpg.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvkm/engine/nvjpg.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVKM_NVJPG_H__
#define __NVKM_NVJPG_H__
#include <core/engine.h>

int ga100_nvjpg_new(struct nvkm_device *, enum nvkm_subdev_type, int inst, struct nvkm_engine **);
int ad102_nvjpg_new(struct nvkm_device *, enum nvkm_subdev_type, int inst, struct nvkm_engine **);
#endif

```
