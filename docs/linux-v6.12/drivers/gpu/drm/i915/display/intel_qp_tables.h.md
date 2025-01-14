---
sidebar_position: 236
---
# intel_qp_tables.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_qp_tables.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef _INTEL_QP_TABLES_H_
#define _INTEL_QP_TABLES_H_

#include <linux/types.h>

u8 intel_lookup_range_min_qp(int bpc, int buf_i, int bpp_i, bool is_420);
u8 intel_lookup_range_max_qp(int bpc, int buf_i, int bpp_i, bool is_420);

#endif

```
