---
sidebar_position: 11
---
# read_overflow2_field-memmove.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/read_overflow2_field-memmove.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memmove(large, instance.buf, sizeof(instance.buf) + 1)

#include "test_fortify.h"

```
