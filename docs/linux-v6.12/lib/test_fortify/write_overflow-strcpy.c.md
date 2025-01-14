---
sidebar_position: 18
---
# write_overflow-strcpy.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/write_overflow-strcpy.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	strcpy(small, large_src)

#include "test_fortify.h"

```
