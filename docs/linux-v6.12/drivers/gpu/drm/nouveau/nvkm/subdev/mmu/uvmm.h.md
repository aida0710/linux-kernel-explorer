---
sidebar_position: 30
---
# uvmm.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/nvkm/subdev/mmu/uvmm.h`

### コンテンツ

```h
#ifndef __NVKM_UVMM_H__
#define __NVKM_UVMM_H__
#define nvkm_uvmm(p) container_of((p), struct nvkm_uvmm, object)
#include <core/object.h>
#include "vmm.h"

struct nvkm_uvmm {
	struct nvkm_object object;
	struct nvkm_vmm *vmm;
};

int nvkm_uvmm_new(const struct nvkm_oclass *, void *argv, u32 argc,
		  struct nvkm_object **);
#endif

```
