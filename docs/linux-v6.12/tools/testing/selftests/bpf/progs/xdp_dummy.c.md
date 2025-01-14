---
sidebar_position: 810
---
# xdp_dummy.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/xdp_dummy.c`

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
