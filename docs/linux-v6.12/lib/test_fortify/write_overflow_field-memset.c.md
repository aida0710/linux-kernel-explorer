---
sidebar_position: 24
---
# write_overflow_field-memset.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/write_overflow_field-memset.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memset(instance.buf, 0x42, sizeof(instance.buf) + 1)

#include "test_fortify.h"

```
