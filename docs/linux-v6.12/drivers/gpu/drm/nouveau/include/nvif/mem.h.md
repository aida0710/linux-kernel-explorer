---
sidebar_position: 39
---
# mem.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvif/mem.h`

### コンテンツ

```h
#ifndef __NVIF_MEM_H__
#define __NVIF_MEM_H__
#include "mmu.h"

struct nvif_mem {
	struct nvif_object object;
	u8  type;
	u8  page;
	u64 addr;
	u64 size;
};

int nvif_mem_ctor_type(struct nvif_mmu *mmu, const char *name, s32 oclass,
		       int type, u8 page, u64 size, void *argv, u32 argc,
		       struct nvif_mem *);
int nvif_mem_ctor(struct nvif_mmu *mmu, const char *name, s32 oclass, u8 type,
		  u8 page, u64 size, void *argv, u32 argc, struct nvif_mem *);
void nvif_mem_dtor(struct nvif_mem *);

int nvif_mem_ctor_map(struct nvif_mmu *, const char *name, u8 type, u64 size,
		      struct nvif_mem *);
#endif

```
