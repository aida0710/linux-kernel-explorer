---
sidebar_position: 329
---
# priv_prog.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/priv_prog.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2023 Meta Platforms, Inc. and affiliates. */

#include "vmlinux.h"
#include <bpf/bpf_helpers.h>

char _license[] SEC("license") = "GPL";

SEC("kprobe")
int kprobe_prog(void *ctx)
{
	return 1;
}

```
