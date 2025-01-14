---
sidebar_position: 8
---
# priv.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/nvkm/subdev/privring/priv.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVKM_PRIVRING_PRIV_H__
#define __NVKM_PRIVRING_PRIV_H__
#include <subdev/privring.h>

void gf100_privring_intr(struct nvkm_subdev *);
void gk104_privring_intr(struct nvkm_subdev *);
#endif

```
