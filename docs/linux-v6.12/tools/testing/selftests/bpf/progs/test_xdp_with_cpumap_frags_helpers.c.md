---
sidebar_position: 677
---
# test_xdp_with_cpumap_frags_helpers.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_xdp_with_cpumap_frags_helpers.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>

#define IFINDEX_LO	1

struct {
	__uint(type, BPF_MAP_TYPE_CPUMAP);
	__uint(key_size, sizeof(__u32));
	__uint(value_size, sizeof(struct bpf_cpumap_val));
	__uint(max_entries, 4);
} cpu_map SEC(".maps");

SEC("xdp/cpumap")
int xdp_dummy_cm(struct xdp_md *ctx)
{
	return XDP_PASS;
}

SEC("xdp.frags/cpumap")
int xdp_dummy_cm_frags(struct xdp_md *ctx)
{
	return XDP_PASS;
}

char _license[] SEC("license") = "GPL";

```
