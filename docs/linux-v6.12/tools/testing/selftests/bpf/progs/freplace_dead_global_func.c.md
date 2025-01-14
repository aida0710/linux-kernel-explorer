---
sidebar_position: 224
---
# freplace_dead_global_func.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/freplace_dead_global_func.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>

SEC("freplace")
int freplace_prog(void)
{
	return 0;
}

char _license[] SEC("license") = "GPL";

```
