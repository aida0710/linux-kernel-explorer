---
sidebar_position: 604
---
# test_sockmap_skb_verdict_attach.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_sockmap_skb_verdict_attach.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include "vmlinux.h"
#include <bpf/bpf_helpers.h>

struct {
	__uint(type, BPF_MAP_TYPE_SOCKMAP);
	__uint(max_entries, 2);
	__type(key, __u32);
	__type(value, __u64);
} sock_map SEC(".maps");

SEC("sk_skb/verdict")
int prog_skb_verdict(struct __sk_buff *skb)
{
	return SK_DROP;
}

char _license[] SEC("license") = "GPL";

```
