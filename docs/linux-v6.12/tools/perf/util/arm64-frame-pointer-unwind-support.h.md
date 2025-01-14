---
sidebar_position: 14
---
# arm64-frame-pointer-unwind-support.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/util/arm64-frame-pointer-unwind-support.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __PERF_ARM_FRAME_POINTER_UNWIND_SUPPORT_H
#define __PERF_ARM_FRAME_POINTER_UNWIND_SUPPORT_H

#include <linux/types.h>

struct perf_sample;
struct thread;

u64 get_leaf_frame_caller_aarch64(struct perf_sample *sample, struct thread *thread, int user_idx);

#endif /* __PERF_ARM_FRAME_POINTER_UNWIND_SUPPORT_H */

```
