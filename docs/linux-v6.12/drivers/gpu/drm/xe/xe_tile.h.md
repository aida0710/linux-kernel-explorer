---
sidebar_position: 263
---
# xe_tile.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_tile.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _XE_TILE_H_
#define _XE_TILE_H_

#include "xe_device_types.h"

struct xe_tile;

int xe_tile_init_early(struct xe_tile *tile, struct xe_device *xe, u8 id);
int xe_tile_init_noalloc(struct xe_tile *tile);

void xe_tile_migrate_wait(struct xe_tile *tile);

#endif

```
