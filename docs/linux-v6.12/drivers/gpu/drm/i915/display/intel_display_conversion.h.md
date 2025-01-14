---
sidebar_position: 69
---
# intel_display_conversion.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_display_conversion.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/* Copyright © 2024 Intel Corporation */

/*
 * This header is for transitional struct intel_display conversion helpers only.
 */

#ifndef __INTEL_DISPLAY_CONVERSION__
#define __INTEL_DISPLAY_CONVERSION__

/*
 * Transitional macro to optionally convert struct drm_i915_private * to struct
 * intel_display *, also accepting the latter.
 */
#define __to_intel_display(p)						\
	_Generic(p,							\
		 const struct drm_i915_private *: (&((const struct drm_i915_private *)(p))->display), \
		 struct drm_i915_private *: (&((struct drm_i915_private *)(p))->display), \
		 const struct intel_display *: (p),			\
		 struct intel_display *: (p))

#endif /* __INTEL_DISPLAY_CONVERSION__ */

```
