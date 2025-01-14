---
sidebar_position: 238
---
# xe_ring_ops_types.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_ring_ops_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_RING_OPS_TYPES_H_
#define _XE_RING_OPS_TYPES_H_

struct xe_sched_job;

#define MAX_JOB_SIZE_DW 48
#define MAX_JOB_SIZE_BYTES (MAX_JOB_SIZE_DW * 4)

/**
 * struct xe_ring_ops - Ring operations
 */
struct xe_ring_ops {
	/** @emit_job: Write job to ring */
	void (*emit_job)(struct xe_sched_job *job);
};

#endif

```
