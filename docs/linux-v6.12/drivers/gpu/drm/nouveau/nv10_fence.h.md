---
sidebar_position: 70
---
# nv10_fence.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/nv10_fence.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NV10_FENCE_H_
#define __NV10_FENCE_H_

#include "nouveau_fence.h"
#include "nouveau_bo.h"

struct nv10_fence_chan {
	struct nouveau_fence_chan base;
	struct nvif_object sema;
};

struct nv10_fence_priv {
	struct nouveau_fence_priv base;
	struct nouveau_bo *bo;
	spinlock_t lock;
	u32 sequence;
};

#endif

```
