---
sidebar_position: 46
---
# test-libpfm4.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libpfm4.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <sys/types.h>
#include <perfmon/pfmlib.h>

int main(void)
{
	pfm_initialize();
	return 0;
}

```
