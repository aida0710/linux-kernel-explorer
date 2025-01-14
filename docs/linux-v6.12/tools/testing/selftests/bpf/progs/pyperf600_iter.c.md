---
sidebar_position: 343
---
# pyperf600_iter.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/pyperf600_iter.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
// Copyright (c) 2023 Meta Platforms, Inc. and affiliates.
#define STACK_MAX_LEN 600
#define SUBPROGS
#define NO_UNROLL
#define USE_ITER
#include "pyperf.h"

```
