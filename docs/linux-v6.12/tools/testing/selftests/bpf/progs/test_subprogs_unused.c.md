---
sidebar_position: 617
---
# test_subprogs_unused.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_subprogs_unused.c`

### コンテンツ

```c
#include "vmlinux.h"
#include <bpf/bpf_helpers.h>
#include <bpf/bpf_core_read.h>

const char LICENSE[] SEC("license") = "GPL";

__attribute__((unused)) __noinline int unused1(int x)
{
	return x + 1;
}

static __attribute__((unused)) __noinline int unused2(int x)
{
	return x + 2;
}

SEC("raw_tp/sys_enter")
int main_prog(void *ctx)
{
	return 0;
}

```
