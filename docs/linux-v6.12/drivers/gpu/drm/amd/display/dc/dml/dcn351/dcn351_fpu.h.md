---
sidebar_position: 2
---
# dcn351_fpu.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/dml/dcn351/dcn351_fpu.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/* Copyright 2024 Advanced Micro Devices, Inc. */

#ifndef __DCN351_FPU_H__
#define __DCN351_FPU_H__

#include "clk_mgr.h"

void dcn351_update_bw_bounding_box_fpu(struct dc *dc,
				      struct clk_bw_params *bw_params);

int dcn351_populate_dml_pipes_from_context_fpu(struct dc *dc,
					      struct dc_state *context,
					      display_e2e_pipe_params_st *pipes,
					      bool fast_validate);

void dcn351_decide_zstate_support(struct dc *dc, struct dc_state *context);

#endif

```
