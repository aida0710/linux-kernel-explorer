---
sidebar_position: 4
---
# read_overflow-memchr_inv.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/read_overflow-memchr_inv.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memchr_inv(small, 0x7A, sizeof(small) + 1)

#include "test_fortify.h"

```
