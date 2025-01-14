---
sidebar_position: 4
---
# intel_pxp_cmd.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/pxp/intel_pxp_cmd.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright(c) 2020, Intel Corporation. All rights reserved.
 */

#ifndef __INTEL_PXP_CMD_H__
#define __INTEL_PXP_CMD_H__

#include <linux/types.h>

struct intel_pxp;

int intel_pxp_terminate_session(struct intel_pxp *pxp, u32 idx);

#endif /* __INTEL_PXP_CMD_H__ */

```
