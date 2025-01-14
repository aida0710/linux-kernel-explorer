---
sidebar_position: 20
---
# npde.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvkm/subdev/bios/npde.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVBIOS_NPDE_H__
#define __NVBIOS_NPDE_H__
struct nvbios_npdeT {
	u32 image_size;
	bool last;
};

u32 nvbios_npdeTe(struct nvkm_bios *, u32);
u32 nvbios_npdeTp(struct nvkm_bios *, u32, struct nvbios_npdeT *);
#endif

```
