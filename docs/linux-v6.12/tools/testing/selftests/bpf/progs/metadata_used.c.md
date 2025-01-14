---
sidebar_position: 305
---
# metadata_used.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/metadata_used.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only

#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>

volatile const char bpf_metadata_a[] SEC(".rodata") = "bar";
volatile const int bpf_metadata_b SEC(".rodata") = 2;

SEC("cgroup_skb/egress")
int prog(struct xdp_md *ctx)
{
	return bpf_metadata_b ? 1 : 0;
}

char _license[] SEC("license") = "GPL";

```
