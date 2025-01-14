---
sidebar_position: 281
---
# xe_tuning.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_tuning.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_TUNING_
#define _XE_TUNING_

struct xe_gt;
struct xe_hw_engine;

void xe_tuning_process_gt(struct xe_gt *gt);
void xe_tuning_process_engine(struct xe_hw_engine *hwe);
void xe_tuning_process_lrc(struct xe_hw_engine *hwe);

#endif

```
