---
sidebar_position: 143
---
# xe_guc_log_types.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_guc_log_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_GUC_LOG_TYPES_H_
#define _XE_GUC_LOG_TYPES_H_

#include <linux/types.h>

struct xe_bo;

/**
 * struct xe_guc_log - GuC log
 */
struct xe_guc_log {
	/** @level: GuC log level */
	u32 level;
	/** @bo: XE BO for GuC log */
	struct xe_bo *bo;
};

#endif

```
