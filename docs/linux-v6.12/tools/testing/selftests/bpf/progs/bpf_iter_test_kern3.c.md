---
sidebar_position: 50
---
# bpf_iter_test_kern3.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/bpf_iter_test_kern3.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2020 Facebook */
#include "bpf_iter.h"
#include <bpf/bpf_helpers.h>

char _license[] SEC("license") = "GPL";

SEC("iter/task")
int dump_task(struct bpf_iter__task *ctx)
{
	struct seq_file *seq = ctx->meta->seq;
	struct task_struct *task = ctx->task;
	int tgid;

	tgid = task->tgid;
	bpf_seq_write(seq, &tgid, sizeof(tgid));
	return 0;
}

```
