---
sidebar_position: 4
---
# mmap_default.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/riscv/mm/mmap_default.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#include <sys/mman.h>
#include <mmap_test.h>

#include "../../kselftest_harness.h"

TEST(default_rlimit)
{
	EXPECT_EQ(TOP_DOWN, memory_layout());
}

TEST_HARNESS_MAIN

```
