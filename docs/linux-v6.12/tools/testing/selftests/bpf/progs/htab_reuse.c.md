---
sidebar_position: 241
---
# htab_reuse.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/htab_reuse.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (C) 2023. Huawei Technologies Co., Ltd */
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>

char _license[] SEC("license") = "GPL";

struct htab_val {
	struct bpf_spin_lock lock;
	unsigned int data;
};

struct {
	__uint(type, BPF_MAP_TYPE_HASH);
	__uint(max_entries, 64);
	__type(key, unsigned int);
	__type(value, struct htab_val);
	__uint(map_flags, BPF_F_NO_PREALLOC);
} htab SEC(".maps");

```
