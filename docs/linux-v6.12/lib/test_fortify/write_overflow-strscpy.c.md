---
sidebar_position: 21
---
# write_overflow-strscpy.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/write_overflow-strscpy.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	strscpy(instance.buf, large_src, sizeof(instance.buf) + 1)

#include "test_fortify.h"

```
