---
sidebar_position: 120
---
# jeq_infer_not_null.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/prog_tests/jeq_infer_not_null.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <test_progs.h>
#include "jeq_infer_not_null_fail.skel.h"

void test_jeq_infer_not_null(void)
{
	RUN_TESTS(jeq_infer_not_null_fail);
}

```
