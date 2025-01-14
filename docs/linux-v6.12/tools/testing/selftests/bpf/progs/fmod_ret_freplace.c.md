---
sidebar_position: 215
---
# fmod_ret_freplace.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/fmod_ret_freplace.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>
#include <bpf/bpf_tracing.h>

volatile __u64 test_fmod_ret = 0;
SEC("fmod_ret/security_new_get_constant")
int BPF_PROG(fmod_ret_test, long val, int ret)
{
	test_fmod_ret = 1;
	return 120;
}

char _license[] SEC("license") = "GPL";

```
