---
sidebar_position: 20
---
# write_overflow-strncpy.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/write_overflow-strncpy.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	strncpy(instance.buf, large_src, sizeof(instance.buf) + 1)

#include "test_fortify.h"

```
