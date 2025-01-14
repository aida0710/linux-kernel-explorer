---
sidebar_position: 147
---
# intel_dvo.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_dvo.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __INTEL_DVO_H__
#define __INTEL_DVO_H__

struct drm_i915_private;

#ifdef I915
void intel_dvo_init(struct drm_i915_private *dev_priv);
#else
static inline void intel_dvo_init(struct drm_i915_private *dev_priv)
{
}
#endif

#endif /* __INTEL_DVO_H__ */

```
