---
sidebar_position: 15
---
# init.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvkm/subdev/bios/init.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVBIOS_INIT_H__
#define __NVBIOS_INIT_H__

struct nvbios_init {
	struct nvkm_subdev *subdev;
	u32 offset;

	struct dcb_output *outp;
	int or;
	int link;
	int head;

	/* internal state used during parsing */
	u8 execute;
	u32 nested;
	u32 repeat;
	u32 repend;
	u32 ramcfg;
};

#define nvbios_init(s,o,ARGS...) ({                                            \
	struct nvbios_init init = {                                            \
		.subdev = (s),                                                 \
		.offset = (o),                                                 \
		.or = -1,                                                      \
		.link = 0,                                                     \
		.head = -1,                                                    \
		.execute = 1,                                                  \
	};                                                                     \
	ARGS                                                                   \
	nvbios_exec(&init);                                                    \
})
int nvbios_exec(struct nvbios_init *);

int nvbios_post(struct nvkm_subdev *, bool execute);
#endif

```
