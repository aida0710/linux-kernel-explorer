---
sidebar_position: 133
---
# selftest_engine.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/selftest_engine.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef SELFTEST_ENGINE_H
#define SELFTEST_ENGINE_H

struct intel_gt;

int live_engine_pm_selftests(struct intel_gt *gt);

#endif

```
