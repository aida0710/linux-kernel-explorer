---
sidebar_position: 60
---
# test-libzstd.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libzstd.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <zstd.h>

int main(void)
{
	ZSTD_CStream	*cstream;

	cstream = ZSTD_createCStream();
	ZSTD_freeCStream(cstream);

	return 0;
}

```
