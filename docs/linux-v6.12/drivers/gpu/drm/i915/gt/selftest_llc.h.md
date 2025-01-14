---
sidebar_position: 142
---
# selftest_llc.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/selftest_llc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef SELFTEST_LLC_H
#define SELFTEST_LLC_H

struct intel_llc;

int st_llc_verify(struct intel_llc *llc);

#endif /* SELFTEST_LLC_H */

```
