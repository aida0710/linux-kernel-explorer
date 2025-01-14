---
sidebar_position: 33
---
# librapl.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/selftests/librapl.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef SELFTEST_LIBRAPL_H
#define SELFTEST_LIBRAPL_H

#include <linux/types.h>

struct drm_i915_private;

bool librapl_supported(const struct drm_i915_private *i915);

u64 librapl_energy_uJ(void);

#endif /* SELFTEST_LIBRAPL_H */

```
