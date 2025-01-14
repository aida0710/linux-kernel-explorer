---
sidebar_position: 64
---
# test-numa_num_possible_cpus.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-numa_num_possible_cpus.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <numa.h>

int main(void)
{
	return numa_num_possible_cpus();
}

```
