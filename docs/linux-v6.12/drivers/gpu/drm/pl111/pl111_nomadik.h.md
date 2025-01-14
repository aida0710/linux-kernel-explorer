---
sidebar_position: 8
---
# pl111_nomadik.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/pl111/pl111_nomadik.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0+

#ifndef PL111_NOMADIK_H
#define PL111_NOMADIK_H
#endif

struct device;

#ifdef CONFIG_ARCH_NOMADIK

void pl111_nomadik_init(struct device *dev);

#else

static inline void pl111_nomadik_init(struct device *dev)
{
}

#endif

```
