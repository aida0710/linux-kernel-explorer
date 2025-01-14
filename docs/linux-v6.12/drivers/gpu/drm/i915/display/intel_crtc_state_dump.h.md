---
sidebar_position: 55
---
# intel_crtc_state_dump.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_crtc_state_dump.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef __INTEL_CRTC_STATE_DUMP_H__
#define __INTEL_CRTC_STATE_DUMP_H__

struct intel_crtc_state;
struct intel_atomic_state;
enum intel_output_format;

void intel_crtc_state_dump(const struct intel_crtc_state *crtc_state,
			   struct intel_atomic_state *state,
			   const char *context);
const char *intel_output_format_name(enum intel_output_format format);

#endif /* __INTEL_CRTC_STATE_H__ */

```
