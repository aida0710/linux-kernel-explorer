---
sidebar_position: 68
---
# core_kern_overflow.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/prog_tests/core_kern_overflow.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include "test_progs.h"
#include "core_kern_overflow.lskel.h"

void test_core_kern_overflow_lskel(void)
{
	struct core_kern_overflow_lskel *skel;

	skel = core_kern_overflow_lskel__open_and_load();
	if (!ASSERT_NULL(skel, "open_and_load"))
		core_kern_overflow_lskel__destroy(skel);
}

```
