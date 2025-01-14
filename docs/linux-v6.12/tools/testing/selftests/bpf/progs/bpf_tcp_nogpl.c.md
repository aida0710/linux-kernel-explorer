---
sidebar_position: 64
---
# bpf_tcp_nogpl.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/bpf_tcp_nogpl.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include "bpf_tracing_net.h"
#include <bpf/bpf_tracing.h>

char _license[] SEC("license") = "X";

SEC("struct_ops")
void BPF_PROG(nogpltcp_init, struct sock *sk)
{
}

SEC(".struct_ops")
struct tcp_congestion_ops bpf_nogpltcp = {
	.init           = (void *)nogpltcp_init,
	.name           = "bpf_nogpltcp",
};

```
