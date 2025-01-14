---
sidebar_position: 11
---
# driver.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/include/nvif/driver.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NVIF_DRIVER_H__
#define __NVIF_DRIVER_H__
#include <nvif/os.h>
struct nvif_client;

struct nvif_driver {
	const char *name;
	int (*init)(const char *name, u64 device, const char *cfg,
		    const char *dbg, void **priv);
	int (*suspend)(void *priv);
	int (*resume)(void *priv);
	int (*ioctl)(void *priv, void *data, u32 size, void **hack);
	void __iomem *(*map)(void *priv, u64 handle, u32 size);
	void (*unmap)(void *priv, void __iomem *ptr, u32 size);
};

int nvif_driver_init(const char *drv, const char *cfg, const char *dbg,
		     const char *name, u64 device, struct nvif_client *);

extern const struct nvif_driver nvif_driver_nvkm;
#endif

```
