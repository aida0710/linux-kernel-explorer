---
sidebar_position: 2
---
# dml2_top_optimization.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/dml2/dml21/src/dml2_top/dml2_top_optimization.h`

### コンテンツ

```h
// SPDX-License-Identifier: MIT
//
// Copyright 2024 Advanced Micro Devices, Inc.

#ifndef __DML2_TOP_OPTIMIZATION_H__
#define __DML2_TOP_OPTIMIZATION_H__

#include "dml2_external_lib_deps.h"
#include "dml2_internal_shared_types.h"

bool dml2_top_optimization_perform_optimization_phase(struct dml2_optimization_phase_locals *l, const struct optimization_phase_params *params);
bool dml2_top_optimization_perform_optimization_phase_1(struct dml2_optimization_phase_locals *l, const struct optimization_phase_params *params);

bool dml2_top_optimization_init_function_min_clk_for_latency(const struct optimization_init_function_params *params);
bool dml2_top_optimization_test_function_min_clk_for_latency(const struct optimization_test_function_params *params);
bool dml2_top_optimization_optimize_function_min_clk_for_latency(const struct optimization_optimize_function_params *params);

bool dml2_top_optimization_test_function_mcache(const struct optimization_test_function_params *params);
bool dml2_top_optimization_optimize_function_mcache(const struct optimization_optimize_function_params *params);

bool dml2_top_optimization_init_function_uclk_pstate(const struct optimization_init_function_params *params);
bool dml2_top_optimization_test_function_uclk_pstate(const struct optimization_test_function_params *params);
bool dml2_top_optimization_optimize_function_uclk_pstate(const struct optimization_optimize_function_params *params);

bool dml2_top_optimization_init_function_vmin(const struct optimization_init_function_params *params);
bool dml2_top_optimization_test_function_vmin(const struct optimization_test_function_params *params);
bool dml2_top_optimization_optimize_function_vmin(const struct optimization_optimize_function_params *params);

bool dml2_top_optimization_init_function_stutter(const struct optimization_init_function_params *params);
bool dml2_top_optimization_test_function_stutter(const struct optimization_test_function_params *params);
bool dml2_top_optimization_optimize_function_stutter(const struct optimization_optimize_function_params *params);

#endif

```
