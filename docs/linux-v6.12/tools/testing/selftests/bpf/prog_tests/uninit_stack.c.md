---
sidebar_position: 310
---
# uninit_stack.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/prog_tests/uninit_stack.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <test_progs.h>
#include "uninit_stack.skel.h"

void test_uninit_stack(void)
{
	RUN_TESTS(uninit_stack);
}

```
