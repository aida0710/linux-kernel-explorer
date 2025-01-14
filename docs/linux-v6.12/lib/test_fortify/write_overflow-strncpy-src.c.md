---
sidebar_position: 19
---
# write_overflow-strncpy-src.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/write_overflow-strncpy-src.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	strncpy(small, large_src, sizeof(small) + 1)

#include "test_fortify.h"

```
