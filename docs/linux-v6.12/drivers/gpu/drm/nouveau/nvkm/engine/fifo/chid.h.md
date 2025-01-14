---
sidebar_position: 7
---
# chid.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/nvkm/engine/fifo/chid.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVKM_CHID_H__
#define __NVKM_CHID_H__
#include <core/event.h>

struct nvkm_chid {
	struct kref kref;
	int nr;
	u32 mask;

	struct nvkm_event event;

	void **data;

	spinlock_t lock;
	unsigned long used[];
};

int nvkm_chid_new(const struct nvkm_event_func *, struct nvkm_subdev *,
		  int nr, int first, int count, struct nvkm_chid **pchid);
struct nvkm_chid *nvkm_chid_ref(struct nvkm_chid *);
void nvkm_chid_unref(struct nvkm_chid **);
int nvkm_chid_get(struct nvkm_chid *, void *data);
void nvkm_chid_put(struct nvkm_chid *, int id, spinlock_t *data_lock);
#endif

```
