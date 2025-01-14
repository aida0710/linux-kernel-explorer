---
sidebar_position: 819
---
# xdp_tx.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/xdp_tx.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>

SEC("xdp")
int xdp_tx(struct xdp_md *xdp)
{
	return XDP_TX;
}

char _license[] SEC("license") = "GPL";

```
