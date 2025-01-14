---
sidebar_position: 506
---
# test_global_func14.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_global_func14.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
#include <stddef.h>
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>
#include "bpf_misc.h"

struct S;

__noinline int foo(const struct S *s)
{
	if (s)
		return bpf_get_prandom_u32() < *(const int *) s;

	return 0;
}

SEC("cgroup_skb/ingress")
__failure __msg("reference type('FWD S') size cannot be determined")
int global_func14(struct __sk_buff *skb)
{

	return foo(NULL);
}

```
