---
sidebar_position: 508
---
# test_global_func16.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_global_func16.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#include <stddef.h>
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>
#include "bpf_misc.h"

__noinline int foo(int (*arr)[10])
{
	if (arr)
		return (*arr)[9];

	return 0;
}

SEC("cgroup_skb/ingress")
__success
int global_func16(struct __sk_buff *skb)
{
	int array[10];

	const int rv = foo(&array);

	return rv ? 1 : 0;
}

```
