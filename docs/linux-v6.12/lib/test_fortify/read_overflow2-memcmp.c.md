---
sidebar_position: 7
---
# read_overflow2-memcmp.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/read_overflow2-memcmp.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memcmp(large, small, sizeof(small) + 1)

#include "test_fortify.h"

```
