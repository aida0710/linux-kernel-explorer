---
sidebar_position: 10
---
# fan.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvkm/subdev/bios/fan.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVBIOS_FAN_H__
#define __NVBIOS_FAN_H__
#include <subdev/bios/therm.h>

u32 nvbios_fan_parse(struct nvkm_bios *bios, struct nvbios_therm_fan *fan);
#endif

```
