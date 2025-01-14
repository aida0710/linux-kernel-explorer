---
sidebar_position: 2
---
# gen2_engine_cs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/gen2_engine_cs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef __GEN2_ENGINE_CS_H__
#define __GEN2_ENGINE_CS_H__

#include <linux/types.h>

struct i915_request;
struct intel_engine_cs;

int gen2_emit_flush(struct i915_request *rq, u32 mode);
int gen4_emit_flush_rcs(struct i915_request *rq, u32 mode);
int gen4_emit_flush_vcs(struct i915_request *rq, u32 mode);

u32 *gen3_emit_breadcrumb(struct i915_request *rq, u32 *cs);
u32 *gen5_emit_breadcrumb(struct i915_request *rq, u32 *cs);

int i830_emit_bb_start(struct i915_request *rq,
		       u64 offset, u32 len,
		       unsigned int dispatch_flags);
int gen3_emit_bb_start(struct i915_request *rq,
		       u64 offset, u32 len,
		       unsigned int dispatch_flags);
int gen4_emit_bb_start(struct i915_request *rq,
		       u64 offset, u32 length,
		       unsigned int dispatch_flags);

void gen2_irq_enable(struct intel_engine_cs *engine);
void gen2_irq_disable(struct intel_engine_cs *engine);
void gen3_irq_enable(struct intel_engine_cs *engine);
void gen3_irq_disable(struct intel_engine_cs *engine);
void gen5_irq_enable(struct intel_engine_cs *engine);
void gen5_irq_disable(struct intel_engine_cs *engine);

#endif /* __GEN2_ENGINE_CS_H__ */

```
