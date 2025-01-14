---
sidebar_position: 67
---
# test-reallocarray.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-reallocarray.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#define _GNU_SOURCE
#include <stdlib.h>

int main(void)
{
	return !!reallocarray(NULL, 1, 1);
}

#undef _GNU_SOURCE

```
