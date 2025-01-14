---
sidebar_position: 9
---
# async_stack_depth.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/prog_tests/async_stack_depth.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <test_progs.h>

#include "async_stack_depth.skel.h"

void test_async_stack_depth(void)
{
	RUN_TESTS(async_stack_depth);
}

```
