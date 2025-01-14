---
sidebar_position: 87
---
# intel_display_power_map.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_display_power_map.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef __INTEL_DISPLAY_POWER_MAP_H__
#define __INTEL_DISPLAY_POWER_MAP_H__

struct i915_power_domains;

int intel_display_power_map_init(struct i915_power_domains *power_domains);
void intel_display_power_map_cleanup(struct i915_power_domains *power_domains);

#endif

```
