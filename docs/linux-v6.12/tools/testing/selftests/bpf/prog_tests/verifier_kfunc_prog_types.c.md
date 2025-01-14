---
sidebar_position: 321
---
# verifier_kfunc_prog_types.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/prog_tests/verifier_kfunc_prog_types.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2024 Meta Platforms, Inc. and affiliates. */

#include <test_progs.h>

#include "verifier_kfunc_prog_types.skel.h"

void test_verifier_kfunc_prog_types(void)
{
	RUN_TESTS(verifier_kfunc_prog_types);
}

```
