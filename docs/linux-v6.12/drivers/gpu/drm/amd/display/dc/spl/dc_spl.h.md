---
sidebar_position: 2
---
# dc_spl.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/spl/dc_spl.h`

### コンテンツ

```h
// SPDX-License-Identifier: MIT
//
// Copyright 2024 Advanced Micro Devices, Inc.

#ifndef __DC_SPL_H__
#define __DC_SPL_H__

#include "dc_spl_types.h"
#define BLACK_OFFSET_RGB_Y 0x0
#define BLACK_OFFSET_CBCR  0x8000

/* SPL interfaces */

bool spl_calculate_scaler_params(struct spl_in *spl_in, struct spl_out *spl_out);

#endif /* __DC_SPL_H__ */

```
