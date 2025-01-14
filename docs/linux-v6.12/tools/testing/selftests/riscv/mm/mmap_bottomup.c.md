---
sidebar_position: 3
---
# mmap_bottomup.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/riscv/mm/mmap_bottomup.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#include <sys/mman.h>
#include <mmap_test.h>

#include "../../kselftest_harness.h"

TEST(infinite_rlimit)
{
	EXPECT_EQ(BOTTOM_UP, memory_layout());
}

TEST_HARNESS_MAIN

```
