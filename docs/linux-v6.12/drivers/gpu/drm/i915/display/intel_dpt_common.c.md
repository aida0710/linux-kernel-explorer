---
sidebar_position: 118
---
# intel_dpt_common.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_dpt_common.c`

### コンテンツ

```c
// SPDX-License-Identifier: MIT
/*
 * Copyright © 2023 Intel Corporation
 */

#include "i915_reg.h"
#include "intel_de.h"
#include "intel_display_types.h"
#include "intel_dpt_common.h"
#include "skl_universal_plane_regs.h"

void intel_dpt_configure(struct intel_crtc *crtc)
{
	struct drm_i915_private *i915 = to_i915(crtc->base.dev);

	if (DISPLAY_VER(i915) == 14) {
		enum pipe pipe = crtc->pipe;
		enum plane_id plane_id;

		for_each_plane_id_on_crtc(crtc, plane_id) {
			if (plane_id == PLANE_CURSOR)
				continue;

			intel_de_rmw(i915, PLANE_CHICKEN(pipe, plane_id),
				     PLANE_CHICKEN_DISABLE_DPT,
				     i915->display.params.enable_dpt ? 0 :
				     PLANE_CHICKEN_DISABLE_DPT);
		}
	} else if (DISPLAY_VER(i915) == 13) {
		intel_de_rmw(i915, CHICKEN_MISC_2,
			     CHICKEN_MISC_DISABLE_DPT,
			     i915->display.params.enable_dpt ? 0 :
			     CHICKEN_MISC_DISABLE_DPT);
	}
}

```
