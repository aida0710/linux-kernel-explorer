---
sidebar_position: 44
---
# oimm.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/dispnv50/oimm.h`

### コンテンツ

```h
#ifndef __NV50_KMS_OIMM_H__
#define __NV50_KMS_OIMM_H__
#include "wndw.h"

int oimm507b_init(struct nouveau_drm *, s32, struct nv50_wndw *);

int nv50_oimm_init(struct nouveau_drm *, struct nv50_wndw *);
#endif

```
