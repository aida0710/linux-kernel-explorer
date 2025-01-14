---
sidebar_position: 99
---
# intel_region_lmem.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_region_lmem.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __INTEL_REGION_LMEM_H
#define __INTEL_REGION_LMEM_H

struct intel_gt;

struct intel_memory_region *intel_gt_setup_lmem(struct intel_gt *gt);

#endif /* !__INTEL_REGION_LMEM_H */

```
