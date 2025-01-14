---
sidebar_position: 18
---
# mock_gem_object.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gem/selftests/mock_gem_object.h`

### コンテンツ

```h
/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright © 2016 Intel Corporation
 */

#ifndef __MOCK_GEM_OBJECT_H__
#define __MOCK_GEM_OBJECT_H__

#include "gem/i915_gem_object_types.h"

struct mock_object {
	struct drm_i915_gem_object base;
};

#endif /* !__MOCK_GEM_OBJECT_H__ */

```
