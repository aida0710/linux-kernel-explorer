---
sidebar_position: 670
---
# test_xdp_link.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_xdp_link.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2020 Facebook */
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>

char LICENSE[] SEC("license") = "GPL";

SEC("xdp")
int xdp_handler(struct xdp_md *xdp)
{
	return 0;
}

SEC("tc")
int tc_handler(struct __sk_buff *skb)
{
	return 0;
}

```
