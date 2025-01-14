---
sidebar_position: 23
---
# write_overflow_field-memmove.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/write_overflow_field-memmove.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memmove(instance.buf, large, sizeof(instance.buf) + 1)

#include "test_fortify.h"

```
