---
sidebar_position: 3
---
# read_overflow-memchr.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/read_overflow-memchr.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memchr(small, 0x7A, sizeof(small) + 1)

#include "test_fortify.h"

```
