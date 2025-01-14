---
sidebar_position: 393
---
# struct_ops_forgotten_cb.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/struct_ops_forgotten_cb.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2024 Meta Platforms, Inc. and affiliates. */
#include <vmlinux.h>
#include <bpf/bpf_tracing.h>
#include "../bpf_testmod/bpf_testmod.h"

char _license[] SEC("license") = "GPL";

SEC("struct_ops/test_1")
int BPF_PROG(test_1_forgotten)
{
	return 0;
}

SEC(".struct_ops.link")
struct bpf_testmod_ops ops = {
	/* we forgot to reference test_1_forgotten above, oops */
};


```
