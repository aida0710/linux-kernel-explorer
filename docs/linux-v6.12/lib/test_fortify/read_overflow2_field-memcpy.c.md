---
sidebar_position: 10
---
# read_overflow2_field-memcpy.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/read_overflow2_field-memcpy.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memcpy(large, instance.buf, sizeof(instance.buf) + 1)

#include "test_fortify.h"

```
