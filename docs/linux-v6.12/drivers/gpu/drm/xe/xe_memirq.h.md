---
sidebar_position: 189
---
# xe_memirq.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_memirq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _XE_MEMIRQ_H_
#define _XE_MEMIRQ_H_

#include <linux/types.h>

struct xe_guc;
struct xe_memirq;

int xe_memirq_init(struct xe_memirq *memirq);

u32 xe_memirq_source_ptr(struct xe_memirq *memirq);
u32 xe_memirq_status_ptr(struct xe_memirq *memirq);
u32 xe_memirq_enable_ptr(struct xe_memirq *memirq);

void xe_memirq_reset(struct xe_memirq *memirq);
void xe_memirq_postinstall(struct xe_memirq *memirq);
void xe_memirq_handler(struct xe_memirq *memirq);

int xe_memirq_init_guc(struct xe_memirq *memirq, struct xe_guc *guc);

#endif

```
