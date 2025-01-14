---
sidebar_position: 439
---
# test_autoattach.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_autoattach.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2022 Google */

#include "vmlinux.h"
#include <bpf/bpf_tracing.h>

bool prog1_called = false;
bool prog2_called = false;

SEC("raw_tp/sys_enter")
int prog1(const void *ctx)
{
	prog1_called = true;
	return 0;
}

SEC("raw_tp/sys_exit")
int prog2(const void *ctx)
{
	prog2_called = true;
	return 0;
}


```
