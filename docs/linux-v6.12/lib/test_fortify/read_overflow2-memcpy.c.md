---
sidebar_position: 8
---
# read_overflow2-memcpy.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/read_overflow2-memcpy.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memcpy(large, instance.buf, sizeof(large))

#include "test_fortify.h"

```
