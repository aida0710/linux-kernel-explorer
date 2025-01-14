---
sidebar_position: 211
---
# fib_lookup.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/fib_lookup.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2023 Meta Platforms, Inc. and affiliates. */

#include <linux/types.h>
#include <linux/bpf.h>
#include <linux/pkt_cls.h>
#include <bpf/bpf_helpers.h>

struct bpf_fib_lookup fib_params = {};
int fib_lookup_ret = 0;
int lookup_flags = 0;

SEC("tc")
int fib_lookup(struct __sk_buff *skb)
{
	fib_lookup_ret = bpf_fib_lookup(skb, &fib_params, sizeof(fib_params),
					lookup_flags);

	return TC_ACT_SHOT;
}

char _license[] SEC("license") = "GPL";

```
