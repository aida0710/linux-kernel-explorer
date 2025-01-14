---
sidebar_position: 9
---
# read_overflow2-memmove.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/read_overflow2-memmove.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memmove(large, instance.buf, sizeof(large))

#include "test_fortify.h"

```
