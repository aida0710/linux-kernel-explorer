---
sidebar_position: 9
---
# gen7_renderclear.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/gen7_renderclear.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2019 Intel Corporation
 */

#ifndef __GEN7_RENDERCLEAR_H__
#define __GEN7_RENDERCLEAR_H__

struct intel_engine_cs;
struct i915_vma;

int gen7_setup_clear_gpr_bb(struct intel_engine_cs * const engine,
			    struct i915_vma * const vma);

#endif /* __GEN7_RENDERCLEAR_H__ */

```
