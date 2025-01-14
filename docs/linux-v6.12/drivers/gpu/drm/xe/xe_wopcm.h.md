---
sidebar_position: 305
---
# xe_wopcm.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_wopcm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_WOPCM_H_
#define _XE_WOPCM_H_

#include "xe_wopcm_types.h"

struct xe_device;

int xe_wopcm_init(struct xe_wopcm *wopcm);
u32 xe_wopcm_size(struct xe_device *xe);

#endif

```
