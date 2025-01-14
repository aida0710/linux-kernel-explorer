---
sidebar_position: 2
---
# dml2_dpmm_dcn4.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/dml2/dml21/src/dml2_dpmm/dml2_dpmm_dcn4.h`

### コンテンツ

```h
// SPDX-License-Identifier: MIT
//
// Copyright 2024 Advanced Micro Devices, Inc.

#ifndef __DML2_DPMM_DCN4_H__
#define __DML2_DPMM_DCN4_H__

#include "dml2_internal_shared_types.h"

bool dpmm_dcn3_map_mode_to_soc_dpm(struct dml2_dpmm_map_mode_to_soc_dpm_params_in_out *in_out);
bool dpmm_dcn4_map_mode_to_soc_dpm(struct dml2_dpmm_map_mode_to_soc_dpm_params_in_out *in_out);
bool dpmm_dcn4_map_watermarks(struct dml2_dpmm_map_watermarks_params_in_out *in_out);

bool dpmm_dcn4_unit_test(void);

#endif

```
