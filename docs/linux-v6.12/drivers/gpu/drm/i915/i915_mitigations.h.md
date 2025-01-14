---
sidebar_position: 45
---
# i915_mitigations.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/i915_mitigations.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef __I915_MITIGATIONS_H__
#define __I915_MITIGATIONS_H__

#include <linux/types.h>

bool i915_mitigate_clear_residuals(void);

#endif /* __I915_MITIGATIONS_H__ */

```
