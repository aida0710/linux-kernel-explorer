---
sidebar_position: 162
---
# xe_huc_types.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_huc_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_HUC_TYPES_H_
#define _XE_HUC_TYPES_H_

#include "xe_uc_fw_types.h"

struct xe_bo;

/**
 * struct xe_huc - HuC
 */
struct xe_huc {
	/** @fw: Generic uC firmware management */
	struct xe_uc_fw fw;

	/** @gsc_pkt: bo to store the packet for auth via GSC */
	struct xe_bo *gsc_pkt;
};

#endif

```
