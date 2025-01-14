---
sidebar_position: 123
---
# intel_dp_aux_backlight.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_dp_aux_backlight.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __INTEL_DP_AUX_BACKLIGHT_H__
#define __INTEL_DP_AUX_BACKLIGHT_H__

struct intel_connector;

int intel_dp_aux_init_backlight_funcs(struct intel_connector *intel_connector);

#endif /* __INTEL_DP_AUX_BACKLIGHT_H__ */

```
