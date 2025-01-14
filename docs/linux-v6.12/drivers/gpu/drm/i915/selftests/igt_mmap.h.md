---
sidebar_position: 23
---
# igt_mmap.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/selftests/igt_mmap.h`

### コンテンツ

```h
/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright © 2019 Intel Corporation
 */

#ifndef IGT_MMAP_H
#define IGT_MMAP_H

#include <linux/types.h>

struct drm_i915_private;
struct drm_vma_offset_node;

unsigned long igt_mmap_offset(struct drm_i915_private *i915,
			      u64 offset,
			      unsigned long size,
			      unsigned long prot,
			      unsigned long flags);

#endif /* IGT_MMAP_H */

```
