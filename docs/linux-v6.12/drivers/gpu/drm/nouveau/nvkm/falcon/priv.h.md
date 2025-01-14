---
sidebar_position: 10
---
# priv.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/nvkm/falcon/priv.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVKM_FALCON_PRIV_H__
#define __NVKM_FALCON_PRIV_H__
#include <core/falcon.h>

static inline int
nvkm_falcon_enable(struct nvkm_falcon *falcon)
{
	if (falcon->func->enable)
		return falcon->func->enable(falcon);
	return 0;
}
#endif

```
