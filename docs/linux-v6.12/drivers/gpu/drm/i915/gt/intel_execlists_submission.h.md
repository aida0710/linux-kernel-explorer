---
sidebar_position: 38
---
# intel_execlists_submission.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_execlists_submission.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2014 Intel Corporation
 */

#ifndef __INTEL_EXECLISTS_SUBMISSION_H__
#define __INTEL_EXECLISTS_SUBMISSION_H__

#include <linux/llist.h>
#include <linux/types.h>

struct drm_printer;

struct i915_request;
struct intel_context;
struct intel_engine_cs;
struct intel_gt;

enum {
	INTEL_CONTEXT_SCHEDULE_IN = 0,
	INTEL_CONTEXT_SCHEDULE_OUT,
	INTEL_CONTEXT_SCHEDULE_PREEMPTED,
};

int intel_execlists_submission_setup(struct intel_engine_cs *engine);

void intel_execlists_show_requests(struct intel_engine_cs *engine,
				   struct drm_printer *m,
				   void (*show_request)(struct drm_printer *m,
							const struct i915_request *rq,
							const char *prefix,
							int indent),
				   unsigned int max);

void intel_execlists_dump_active_requests(struct intel_engine_cs *engine,
					  struct i915_request *hung_rq,
					  struct drm_printer *m);

bool
intel_engine_in_execlists_submission_mode(const struct intel_engine_cs *engine);

#endif /* __INTEL_EXECLISTS_SUBMISSION_H__ */

```
