---
sidebar_position: 57
---
# wimm.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/dispnv50/wimm.h`

### コンテンツ

```h
#ifndef __NV50_KMS_WIMM_H__
#define __NV50_KMS_WIMM_H__
#include "wndw.h"

int nv50_wimm_init(struct nouveau_drm *drm, struct nv50_wndw *);

int wimmc37b_init(struct nouveau_drm *, s32, struct nv50_wndw *);
#endif

```
