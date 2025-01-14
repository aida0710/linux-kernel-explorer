---
sidebar_position: 57
---
# intel_cursor.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_cursor.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef _INTEL_CURSOR_H_
#define _INTEL_CURSOR_H_

enum pipe;
struct drm_i915_private;
struct intel_plane;
struct kthread_work;

struct intel_plane *
intel_cursor_plane_create(struct drm_i915_private *dev_priv,
			  enum pipe pipe);

void intel_cursor_unpin_work(struct kthread_work *base);

#endif

```
