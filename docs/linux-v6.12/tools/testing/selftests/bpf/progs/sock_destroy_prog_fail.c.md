---
sidebar_position: 379
---
# sock_destroy_prog_fail.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/sock_destroy_prog_fail.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include "vmlinux.h"
#include <bpf/bpf_tracing.h>
#include <bpf/bpf_helpers.h>

#include "bpf_misc.h"

char _license[] SEC("license") = "GPL";

int bpf_sock_destroy(struct sock_common *sk) __ksym;

SEC("tp_btf/tcp_destroy_sock")
__failure __msg("calling kernel function bpf_sock_destroy is not allowed")
int BPF_PROG(trace_tcp_destroy_sock, struct sock *sk)
{
	/* should not load */
	bpf_sock_destroy((struct sock_common *)sk);

	return 0;
}


```
