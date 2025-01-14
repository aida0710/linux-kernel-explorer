---
sidebar_position: 33
---
# intel_guc_rc.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/uc/intel_guc_rc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef _INTEL_GUC_RC_H_
#define _INTEL_GUC_RC_H_

#include "intel_guc_submission.h"

void intel_guc_rc_init_early(struct intel_guc *guc);

static inline bool intel_guc_rc_is_supported(struct intel_guc *guc)
{
	return guc->rc_supported;
}

static inline bool intel_guc_rc_is_wanted(struct intel_guc *guc)
{
	return guc->submission_selected && intel_guc_rc_is_supported(guc);
}

static inline bool intel_guc_rc_is_used(struct intel_guc *guc)
{
	return intel_guc_submission_is_used(guc) && intel_guc_rc_is_wanted(guc);
}

int intel_guc_rc_enable(struct intel_guc *guc);
int intel_guc_rc_disable(struct intel_guc *guc);

#endif

```
