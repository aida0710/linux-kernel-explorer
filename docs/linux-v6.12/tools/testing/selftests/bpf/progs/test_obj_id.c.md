---
sidebar_position: 552
---
# test_obj_id.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_obj_id.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/* Copyright (c) 2017 Facebook
 */
#include <stddef.h>
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>
#include "bpf_misc.h"

struct {
	__uint(type, BPF_MAP_TYPE_ARRAY);
	__uint(max_entries, 1);
	__type(key, __u32);
	__type(value, __u64);
} test_map_id SEC(".maps");

SEC("raw_tp/sys_enter")
int test_obj_id(void *ctx)
{
	__u32 key = 0;
	__u64 *value;

	value = bpf_map_lookup_elem(&test_map_id, &key);
	__sink(value);

	return 0;
}

```
