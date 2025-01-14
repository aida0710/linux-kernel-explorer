---
sidebar_position: 2
---
# intel_dram.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/soc/intel_dram.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef __INTEL_DRAM_H__
#define __INTEL_DRAM_H__

struct drm_i915_private;

void intel_dram_edram_detect(struct drm_i915_private *i915);
void intel_dram_detect(struct drm_i915_private *i915);
unsigned int i9xx_fsb_freq(struct drm_i915_private *i915);

#endif /* __INTEL_DRAM_H__ */

```
