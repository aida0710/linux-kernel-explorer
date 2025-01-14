---
sidebar_position: 179
---
# xe_lmtt.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_lmtt.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _XE_LMTT_H_
#define _XE_LMTT_H_

#include <linux/types.h>

struct xe_bo;
struct xe_lmtt;
struct xe_lmtt_ops;

#ifdef CONFIG_PCI_IOV
int xe_lmtt_init(struct xe_lmtt *lmtt);
void xe_lmtt_init_hw(struct xe_lmtt *lmtt);
int xe_lmtt_prepare_pages(struct xe_lmtt *lmtt, unsigned int vfid, u64 range);
int xe_lmtt_populate_pages(struct xe_lmtt *lmtt, unsigned int vfid, struct xe_bo *bo, u64 offset);
void xe_lmtt_drop_pages(struct xe_lmtt *lmtt, unsigned int vfid);
u64 xe_lmtt_estimate_pt_size(struct xe_lmtt *lmtt, u64 size);
#else
static inline int xe_lmtt_init(struct xe_lmtt *lmtt) { return 0; }
static inline void xe_lmtt_init_hw(struct xe_lmtt *lmtt) { }
#endif

#endif

```
