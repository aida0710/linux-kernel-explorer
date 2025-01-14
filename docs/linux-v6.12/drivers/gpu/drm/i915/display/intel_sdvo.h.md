---
sidebar_position: 240
---
# intel_sdvo.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_sdvo.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __INTEL_SDVO_H__
#define __INTEL_SDVO_H__

#include <linux/types.h>

#include "i915_reg_defs.h"

struct drm_i915_private;
enum pipe;
enum port;

#ifdef I915
bool intel_sdvo_port_enabled(struct drm_i915_private *dev_priv,
			     i915_reg_t sdvo_reg, enum pipe *pipe);
bool intel_sdvo_init(struct drm_i915_private *dev_priv,
		     i915_reg_t reg, enum port port);
#else
static inline bool intel_sdvo_port_enabled(struct drm_i915_private *dev_priv,
					   i915_reg_t sdvo_reg, enum pipe *pipe)
{
	return false;
}
static inline bool intel_sdvo_init(struct drm_i915_private *dev_priv,
				   i915_reg_t reg, enum port port)
{
	return false;
}
#endif

#endif /* __INTEL_SDVO_H__ */

```
