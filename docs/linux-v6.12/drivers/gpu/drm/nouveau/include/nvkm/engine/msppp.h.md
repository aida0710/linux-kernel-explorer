---
sidebar_position: 12
---
# msppp.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvkm/engine/msppp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVKM_MSPPP_H__
#define __NVKM_MSPPP_H__
#include <engine/falcon.h>
int g98_msppp_new(struct nvkm_device *, enum nvkm_subdev_type, int inst, struct nvkm_engine **);
int gt215_msppp_new(struct nvkm_device *, enum nvkm_subdev_type, int inst, struct nvkm_engine **);
int gf100_msppp_new(struct nvkm_device *, enum nvkm_subdev_type, int inst, struct nvkm_engine **);
#endif

```
