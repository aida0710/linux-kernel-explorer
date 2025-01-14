---
sidebar_position: 5
---
# ctrl.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/nvkm/engine/device/ctrl.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVKM_DEVICE_CTRL_H__
#define __NVKM_DEVICE_CTRL_H__
#define nvkm_control(p) container_of((p), struct nvkm_control, object)
#include <core/object.h>

struct nvkm_control {
	struct nvkm_object object;
	struct nvkm_device *device;
};

extern const struct nvkm_device_oclass nvkm_control_oclass;
#endif

```
