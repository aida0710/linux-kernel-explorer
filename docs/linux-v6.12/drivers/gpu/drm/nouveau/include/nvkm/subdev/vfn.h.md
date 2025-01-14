---
sidebar_position: 25
---
# vfn.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvkm/subdev/vfn.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVKM_VFN_H__
#define __NVKM_VFN_H__
#include <core/subdev.h>

struct nvkm_vfn {
	const struct nvkm_vfn_func *func;
	struct nvkm_subdev subdev;

	struct {
		u32 priv;
		u32 user;
	} addr;

	struct nvkm_intr intr;

	struct nvkm_device_oclass user;
};

int gv100_vfn_new(struct nvkm_device *, enum nvkm_subdev_type, int, struct nvkm_vfn **);
int tu102_vfn_new(struct nvkm_device *, enum nvkm_subdev_type, int, struct nvkm_vfn **);
int ga100_vfn_new(struct nvkm_device *, enum nvkm_subdev_type, int, struct nvkm_vfn **);
#endif

```
