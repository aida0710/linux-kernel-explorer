---
sidebar_position: 91
---
# xe_gt_sriov_pf_monitor_types.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_gt_sriov_pf_monitor_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023-2024 Intel Corporation
 */

#ifndef _XE_GT_SRIOV_PF_MONITOR_TYPES_H_
#define _XE_GT_SRIOV_PF_MONITOR_TYPES_H_

#include "xe_guc_klv_thresholds_set_types.h"

/**
 * struct xe_gt_sriov_monitor - GT level per-VF monitoring data.
 */
struct xe_gt_sriov_monitor {
	/** @guc: monitoring data related to the GuC. */
	struct {
		/** @guc.events: number of adverse events reported by the GuC. */
		unsigned int events[XE_GUC_KLV_NUM_THRESHOLDS];
	} guc;
};

#endif

```
