---
sidebar_position: 69
---
# test-sched_getcpu.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-sched_getcpu.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#ifndef _GNU_SOURCE
#define _GNU_SOURCE
#endif
#include <sched.h>

int main(void)
{
	return sched_getcpu();
}

#undef _GNU_SOURCE

```
