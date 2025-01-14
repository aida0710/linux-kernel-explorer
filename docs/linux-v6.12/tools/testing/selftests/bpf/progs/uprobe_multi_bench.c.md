---
sidebar_position: 701
---
# uprobe_multi_bench.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/uprobe_multi_bench.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>
#include <bpf/bpf_tracing.h>

char _license[] SEC("license") = "GPL";

int count;

SEC("uprobe.multi/./uprobe_multi:uprobe_multi_func_*")
int uprobe_bench(struct pt_regs *ctx)
{
	count++;
	return 0;
}

```
