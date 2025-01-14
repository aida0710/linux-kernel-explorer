---
sidebar_position: 17
---
# write_overflow-strcpy-lit.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/write_overflow-strcpy-lit.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	strcpy(small, LITERAL_LARGE)

#include "test_fortify.h"

```
