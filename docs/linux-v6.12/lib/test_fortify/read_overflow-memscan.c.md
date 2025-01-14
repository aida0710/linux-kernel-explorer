---
sidebar_position: 6
---
# read_overflow-memscan.c

### ファイル情報

- パス: `linux-v6.12/lib/test_fortify/read_overflow-memscan.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#define TEST	\
	memscan(small, 0x7A, sizeof(small) + 1)

#include "test_fortify.h"

```
