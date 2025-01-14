---
sidebar_position: 84
---
# intel_llc.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_llc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef INTEL_LLC_H
#define INTEL_LLC_H

struct intel_llc;

void intel_llc_enable(struct intel_llc *llc);
void intel_llc_disable(struct intel_llc *llc);

#endif /* INTEL_LLC_H */

```
