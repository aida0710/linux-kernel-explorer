---
sidebar_position: 298
---
# xe_vram_freq.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_vram_freq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _XE_VRAM_FREQ_H_
#define _XE_VRAM_FREQ_H_

struct xe_tile;

int xe_vram_freq_sysfs_init(struct xe_tile *tile);

#endif /* _XE_VRAM_FREQ_H_ */

```
