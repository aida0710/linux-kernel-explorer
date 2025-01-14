---
sidebar_position: 268
---
# kprobe_multi_override.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/kprobe_multi_override.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>
#include <bpf/bpf_tracing.h>

char _license[] SEC("license") = "GPL";

SEC("kprobe.multi")
int test_override(struct pt_regs *ctx)
{
	bpf_override_return(ctx, 123);
	return 0;
}

```
