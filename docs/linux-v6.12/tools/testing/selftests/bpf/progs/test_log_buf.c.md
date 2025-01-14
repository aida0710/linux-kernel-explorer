---
sidebar_position: 532
---
# test_log_buf.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_log_buf.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2021 Facebook */

#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>

int a[4];
const volatile int off = 4000;

SEC("raw_tp/sys_enter")
int good_prog(const void *ctx)
{
	a[0] = (int)(long)ctx;
	return a[1];
}

SEC("raw_tp/sys_enter")
int bad_prog(const void *ctx)
{
	/* out of bounds access */
	return a[off];
}

char _license[] SEC("license") = "GPL";

```
