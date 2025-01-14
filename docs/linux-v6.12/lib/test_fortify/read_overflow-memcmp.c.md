---
sidebar_position: 5
---
# read_overflow-memcmp.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/read_overflow-memcmp.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memcmp(small, large, sizeof(small) + 1)

#include "test_fortify.h"

```
