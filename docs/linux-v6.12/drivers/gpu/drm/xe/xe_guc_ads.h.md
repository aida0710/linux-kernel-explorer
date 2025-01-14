---
sidebar_position: 121
---
# xe_guc_ads.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_guc_ads.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_GUC_ADS_H_
#define _XE_GUC_ADS_H_

struct xe_guc_ads;

int xe_guc_ads_init(struct xe_guc_ads *ads);
int xe_guc_ads_init_post_hwconfig(struct xe_guc_ads *ads);
void xe_guc_ads_populate(struct xe_guc_ads *ads);
void xe_guc_ads_populate_minimal(struct xe_guc_ads *ads);
void xe_guc_ads_populate_post_load(struct xe_guc_ads *ads);
int xe_guc_ads_scheduler_policy_toggle_reset(struct xe_guc_ads *ads);

#endif

```
