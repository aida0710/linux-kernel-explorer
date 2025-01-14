---
sidebar_position: 157
---
# xdp_dummy.bpf.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/xdp_dummy.bpf.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#define KBUILD_MODNAME "xdp_dummy"
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>

SEC("xdp")
int xdp_dummy_prog(struct xdp_md *ctx)
{
	return XDP_PASS;
}

char _license[] SEC("license") = "GPL";

```
