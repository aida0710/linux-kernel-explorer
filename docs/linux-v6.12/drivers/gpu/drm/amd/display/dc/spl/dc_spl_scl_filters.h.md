---
sidebar_position: 10
---
# dc_spl_scl_filters.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/spl/dc_spl_scl_filters.h`

### コンテンツ

```h
// SPDX-License-Identifier: MIT
//
// Copyright 2024 Advanced Micro Devices, Inc.

#ifndef __DC_SPL_SCL_FILTERS_H__
#define __DC_SPL_SCL_FILTERS_H__

#include "dc_spl_types.h"

const uint16_t *spl_get_filter_3tap_16p(struct spl_fixed31_32 ratio);
const uint16_t *spl_get_filter_3tap_64p(struct spl_fixed31_32 ratio);
const uint16_t *spl_get_filter_4tap_16p(struct spl_fixed31_32 ratio);
const uint16_t *spl_get_filter_4tap_64p(struct spl_fixed31_32 ratio);
const uint16_t *spl_get_filter_5tap_64p(struct spl_fixed31_32 ratio);
const uint16_t *spl_get_filter_6tap_64p(struct spl_fixed31_32 ratio);
const uint16_t *spl_get_filter_7tap_64p(struct spl_fixed31_32 ratio);
const uint16_t *spl_get_filter_8tap_64p(struct spl_fixed31_32 ratio);
const uint16_t *spl_get_filter_2tap_16p(void);
const uint16_t *spl_get_filter_2tap_64p(void);
const uint16_t *spl_dscl_get_filter_coeffs_64p(int taps, struct spl_fixed31_32 ratio);

#endif /* __DC_SPL_SCL_FILTERS_H__ */

```
