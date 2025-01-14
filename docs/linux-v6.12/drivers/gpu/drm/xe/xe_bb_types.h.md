---
sidebar_position: 11
---
# xe_bb_types.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_bb_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_BB_TYPES_H_
#define _XE_BB_TYPES_H_

#include <linux/types.h>

struct drm_suballoc;

struct xe_bb {
	struct drm_suballoc *bo;

	u32 *cs;
	u32 len; /* in dwords */
};

#endif

```
