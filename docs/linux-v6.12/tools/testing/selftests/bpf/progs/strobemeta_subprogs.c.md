---
sidebar_position: 389
---
# strobemeta_subprogs.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/strobemeta_subprogs.c`

### コンテンツ

```c
// SPDX-License-Identifier: (LGPL-2.1 OR BSD-2-Clause)
// Copyright (c) 2019 Facebook

#define STROBE_MAX_INTS 2
#define STROBE_MAX_STRS 25
#define STROBE_MAX_MAPS 13
#define STROBE_MAX_MAP_ENTRIES 20
#define NO_UNROLL
#define SUBPROGS
#include "strobemeta.h"

```
