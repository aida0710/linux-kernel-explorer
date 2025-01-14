---
sidebar_position: 450
---
# test_build_id.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_build_id.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2024 Meta Platforms, Inc. and affiliates. */

#include "vmlinux.h"
#include <bpf/bpf_helpers.h>

struct bpf_stack_build_id stack_sleepable[128];
int res_sleepable;

struct bpf_stack_build_id stack_nofault[128];
int res_nofault;

SEC("uprobe.multi/./uprobe_multi:uprobe")
int uprobe_nofault(struct pt_regs *ctx)
{
	res_nofault = bpf_get_stack(ctx, stack_nofault, sizeof(stack_nofault),
				    BPF_F_USER_STACK | BPF_F_USER_BUILD_ID);

	return 0;
}

SEC("uprobe.multi.s/./uprobe_multi:uprobe")
int uprobe_sleepable(struct pt_regs *ctx)
{
	res_sleepable = bpf_get_stack(ctx, stack_sleepable, sizeof(stack_sleepable),
				      BPF_F_USER_STACK | BPF_F_USER_BUILD_ID);

	return 0;
}

char _license[] SEC("license") = "GPL";

```
