---
sidebar_position: 90
---
# sample_map_ret0.bpf.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/sample_map_ret0.bpf.c`

### コンテンツ

```c
/* SPDX-License-Identifier: (GPL-2.0 OR BSD-2-Clause) */
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>

struct {
	__uint(type, BPF_MAP_TYPE_HASH);
	__type(key, __u32);
	__type(value, long);
	__uint(max_entries, 2);
} htab SEC(".maps");

struct {
	__uint(type, BPF_MAP_TYPE_ARRAY);
	__type(key, __u32);
	__type(value, long);
	__uint(max_entries, 2);
} array SEC(".maps");

/* Sample program which should always load for testing control paths. */
SEC("xdp") int func()
{
	__u64 key64 = 0;
	__u32 key = 0;
	long *value;

	value = bpf_map_lookup_elem(&htab, &key);
	if (!value)
		return 1;
	value = bpf_map_lookup_elem(&array, &key64);
	if (!value)
		return 1;

	return 0;
}

```
