---
sidebar_position: 11
---
# atomic_bounds.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/prog_tests/atomic_bounds.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <test_progs.h>

#include "atomic_bounds.skel.h"

void test_atomic_bounds(void)
{
	struct atomic_bounds *skel;
	__u32 duration = 0;

	skel = atomic_bounds__open_and_load();
	if (CHECK(!skel, "skel_load", "couldn't load program\n"))
		return;

	atomic_bounds__destroy(skel);
}

```
