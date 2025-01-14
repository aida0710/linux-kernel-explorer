---
sidebar_position: 328
---
# priv_map.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/priv_map.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2023 Meta Platforms, Inc. and affiliates. */

#include "vmlinux.h"
#include <bpf/bpf_helpers.h>

char _license[] SEC("license") = "GPL";

struct {
	__uint(type, BPF_MAP_TYPE_QUEUE);
	__uint(max_entries, 1);
	__type(value, __u32);
} priv_map SEC(".maps");

```
