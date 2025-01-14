---
sidebar_position: 1
---
# bit.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvkm/subdev/bios/bit.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVBIOS_BIT_H__
#define __NVBIOS_BIT_H__
struct bit_entry {
	u8  id;
	u8  version;
	u16 length;
	u16 offset;
};

int bit_entry(struct nvkm_bios *, u8 id, struct bit_entry *);
#endif

```
