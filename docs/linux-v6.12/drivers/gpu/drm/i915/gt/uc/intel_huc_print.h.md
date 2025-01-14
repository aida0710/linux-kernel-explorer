---
sidebar_position: 46
---
# intel_huc_print.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/uc/intel_huc_print.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef __INTEL_HUC_PRINT__
#define __INTEL_HUC_PRINT__

#include "gt/intel_gt.h"
#include "gt/intel_gt_print.h"

#define huc_printk(_huc, _level, _fmt, ...) \
	gt_##_level(huc_to_gt(_huc), "HuC: " _fmt, ##__VA_ARGS__)
#define huc_err(_huc, _fmt, ...)	huc_printk((_huc), err, _fmt, ##__VA_ARGS__)
#define huc_warn(_huc, _fmt, ...)	huc_printk((_huc), warn, _fmt, ##__VA_ARGS__)
#define huc_notice(_huc, _fmt, ...)	huc_printk((_huc), notice, _fmt, ##__VA_ARGS__)
#define huc_info(_huc, _fmt, ...)	huc_printk((_huc), info, _fmt, ##__VA_ARGS__)
#define huc_dbg(_huc, _fmt, ...)	huc_printk((_huc), dbg, _fmt, ##__VA_ARGS__)
#define huc_probe_error(_huc, _fmt, ...) huc_printk((_huc), probe_error, _fmt, ##__VA_ARGS__)

#endif /* __INTEL_HUC_PRINT__ */

```
