---
sidebar_position: 704
---
# uprobe_multi_usdt.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/uprobe_multi_usdt.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include "vmlinux.h"
#include <bpf/bpf_helpers.h>
#include <bpf/usdt.bpf.h>

char _license[] SEC("license") = "GPL";

int count;

SEC("usdt")
int usdt0(struct pt_regs *ctx)
{
	count++;
	return 0;
}

```
