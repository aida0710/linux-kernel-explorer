---
sidebar_position: 19
---
# mxm.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvkm/subdev/bios/mxm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVBIOS_MXM_H__
#define __NVBIOS_MXM_H__
u16 mxm_table(struct nvkm_bios *, u8 *ver, u8 *hdr);
u8  mxm_sor_map(struct nvkm_bios *, u8 conn);
u8  mxm_ddc_map(struct nvkm_bios *, u8 port);
#endif

```
