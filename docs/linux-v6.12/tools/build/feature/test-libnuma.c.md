---
sidebar_position: 43
---
# test-libnuma.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libnuma.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <numa.h>
#include <numaif.h>

int main(void)
{
	numa_available();

	return 0;
}

```
