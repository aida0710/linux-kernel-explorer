---
sidebar_position: 46
---
# intel_combo_phy.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_combo_phy.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __INTEL_COMBO_PHY_H__
#define __INTEL_COMBO_PHY_H__

#include <linux/types.h>

struct drm_i915_private;
enum phy;

void intel_combo_phy_init(struct drm_i915_private *dev_priv);
void intel_combo_phy_uninit(struct drm_i915_private *dev_priv);
void intel_combo_phy_power_up_lanes(struct drm_i915_private *dev_priv,
				    enum phy phy, bool is_dsi,
				    int lane_count, bool lane_reversal);

#endif /* __INTEL_COMBO_PHY_H__ */

```
