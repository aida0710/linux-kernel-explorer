---
sidebar_position: 16
---
# write_overflow-memset.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/write_overflow-memset.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memset(instance.buf, 0x5A, sizeof(large_src))

#include "test_fortify.h"

```
