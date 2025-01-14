---
sidebar_position: 10
---
# pl111_versatile.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/pl111/pl111_versatile.h`

### コンテンツ

```h
#include <linux/device.h>
#include "pl111_drm.h"

#ifndef PL111_VERSATILE_H
#define PL111_VERSATILE_H

struct device;
struct pl111_drm_dev_private;

int pl111_versatile_init(struct device *dev, struct pl111_drm_dev_private *priv);

#endif

```
