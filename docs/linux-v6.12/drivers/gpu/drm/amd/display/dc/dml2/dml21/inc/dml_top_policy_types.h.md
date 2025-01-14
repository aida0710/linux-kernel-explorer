---
sidebar_position: 5
---
# dml_top_policy_types.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/dml2/dml21/inc/dml_top_policy_types.h`

### コンテンツ

```h
// SPDX-License-Identifier: MIT
//
// Copyright 2024 Advanced Micro Devices, Inc.

#ifndef __DML_TOP_POLICY_TYPES_H__
#define __DML_TOP_POLICY_TYPES_H__

struct dml2_policy_parameters {
	unsigned long odm_combine_dispclk_threshold_khz;
	unsigned int max_immediate_flip_latency;
};

#endif

```
