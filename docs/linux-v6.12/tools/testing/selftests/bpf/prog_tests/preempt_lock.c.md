---
sidebar_position: 188
---
# preempt_lock.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/prog_tests/preempt_lock.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <test_progs.h>
#include <network_helpers.h>
#include <preempt_lock.skel.h>

void test_preempt_lock(void)
{
	RUN_TESTS(preempt_lock);
}

```
