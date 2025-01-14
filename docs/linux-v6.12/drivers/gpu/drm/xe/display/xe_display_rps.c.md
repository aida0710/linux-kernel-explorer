---
sidebar_position: 7
---
# xe_display_rps.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/display/xe_display_rps.c`

### コンテンツ

```c
// SPDX-License-Identifier: MIT
/*
 * Copyright © 2023 Intel Corporation
 */

#include "intel_display_rps.h"

void intel_display_rps_boost_after_vblank(struct drm_crtc *crtc,
					  struct dma_fence *fence)
{
}

void intel_display_rps_mark_interactive(struct drm_i915_private *i915,
					struct intel_atomic_state *state,
					bool interactive)
{
}

```
