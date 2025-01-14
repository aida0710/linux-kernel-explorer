---
sidebar_position: 126
---
# kfunc_param_nullable.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/prog_tests/kfunc_param_nullable.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

/* Copyright (c) 2024 Meta Platforms, Inc */

#include <test_progs.h>
#include "test_kfunc_param_nullable.skel.h"

void test_kfunc_param_nullable(void)
{
	RUN_TESTS(test_kfunc_param_nullable);
}

```
