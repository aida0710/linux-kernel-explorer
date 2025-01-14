---
sidebar_position: 74
---
# test-zlib.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-zlib.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <zlib.h>

int main(void)
{
	z_stream zs;

	inflateInit(&zs);
	return 0;
}

```
