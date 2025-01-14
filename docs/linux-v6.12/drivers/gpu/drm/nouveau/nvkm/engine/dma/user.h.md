---
sidebar_position: 10
---
# user.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/nvkm/engine/dma/user.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVKM_DMA_USER_H__
#define __NVKM_DMA_USER_H__
#define nvkm_dmaobj(p) container_of((p), struct nvkm_dmaobj, object)
#include "priv.h"

int nvkm_dmaobj_ctor(const struct nvkm_dmaobj_func *, struct nvkm_dma *,
		     const struct nvkm_oclass *, void **data, u32 *size,
		     struct nvkm_dmaobj *);

int nv04_dmaobj_new(struct nvkm_dma *, const struct nvkm_oclass *, void *, u32,
		    struct nvkm_dmaobj **);
int nv50_dmaobj_new(struct nvkm_dma *, const struct nvkm_oclass *, void *, u32,
		    struct nvkm_dmaobj **);
int gf100_dmaobj_new(struct nvkm_dma *, const struct nvkm_oclass *, void *, u32,
		     struct nvkm_dmaobj **);
int gf119_dmaobj_new(struct nvkm_dma *, const struct nvkm_oclass *, void *, u32,
		     struct nvkm_dmaobj **);
int gv100_dmaobj_new(struct nvkm_dma *, const struct nvkm_oclass *, void *, u32,
		     struct nvkm_dmaobj **);
#endif

```
