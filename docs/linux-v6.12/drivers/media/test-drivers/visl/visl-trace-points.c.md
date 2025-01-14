---
sidebar_position: 13
---
# visl-trace-points.c

### ファイル情報

- パス: `linux-v6.12/drivers/media/test-drivers/visl/visl-trace-points.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include "visl.h"

#define CREATE_TRACE_POINTS
#include "visl-trace-fwht.h"
#include "visl-trace-mpeg2.h"
#include "visl-trace-vp8.h"
#include "visl-trace-vp9.h"
#include "visl-trace-h264.h"
#include "visl-trace-hevc.h"
#include "visl-trace-av1.h"

```
