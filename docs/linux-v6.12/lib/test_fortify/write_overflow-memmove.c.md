---
sidebar_position: 15
---
# write_overflow-memmove.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/write_overflow-memmove.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memmove(instance.buf, large_src, sizeof(large_src))

#include "test_fortify.h"

```
