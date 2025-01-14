---
sidebar_position: 232
---
# xe_reg_sr_types.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_reg_sr_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_REG_SR_TYPES_
#define _XE_REG_SR_TYPES_

#include <linux/types.h>
#include <linux/xarray.h>

#include "regs/xe_reg_defs.h"

struct xe_reg_sr_entry {
	struct xe_reg	reg;
	u32		clr_bits;
	u32		set_bits;
	/* Mask for bits to consider when reading value back */
	u32		read_mask;
};

struct xe_reg_sr {
	struct {
		struct xe_reg_sr_entry *arr;
		unsigned int used;
		unsigned int allocated;
		unsigned int grow_step;
	} pool;
	struct xarray xa;
	const char *name;

#if IS_ENABLED(CONFIG_DRM_XE_KUNIT_TEST)
	unsigned int errors;
#endif
};

#endif

```
