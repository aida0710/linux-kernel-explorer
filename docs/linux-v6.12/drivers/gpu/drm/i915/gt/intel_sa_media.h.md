---
sidebar_position: 113
---
# intel_sa_media.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_sa_media.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */
#ifndef __INTEL_SA_MEDIA__
#define __INTEL_SA_MEDIA__

#include <linux/types.h>

struct intel_gt;

int intel_sa_mediagt_setup(struct intel_gt *gt, phys_addr_t phys_addr,
			   u32 gsi_offset);

#endif /* __INTEL_SA_MEDIA_H__ */

```
