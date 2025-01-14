---
sidebar_position: 37
---
# test-libdebuginfod.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libdebuginfod.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <elfutils/debuginfod.h>

int main(void)
{
	debuginfod_client* c = debuginfod_begin();
	return (long)c;
}

```
