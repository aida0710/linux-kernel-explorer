---
sidebar_position: 101
---
# intel_dkl_phy.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_dkl_phy.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef __INTEL_DKL_PHY_H__
#define __INTEL_DKL_PHY_H__

#include <linux/types.h>

#include "intel_dkl_phy_regs.h"

struct drm_i915_private;

void intel_dkl_phy_init(struct drm_i915_private *i915);
u32
intel_dkl_phy_read(struct drm_i915_private *i915, struct intel_dkl_phy_reg reg);
void
intel_dkl_phy_write(struct drm_i915_private *i915, struct intel_dkl_phy_reg reg, u32 val);
void
intel_dkl_phy_rmw(struct drm_i915_private *i915, struct intel_dkl_phy_reg reg, u32 clear, u32 set);
void
intel_dkl_phy_posting_read(struct drm_i915_private *i915, struct intel_dkl_phy_reg reg);

#endif /* __INTEL_DKL_PHY_H__ */

```
