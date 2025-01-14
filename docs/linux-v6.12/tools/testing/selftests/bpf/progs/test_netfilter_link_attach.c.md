---
sidebar_position: 550
---
# test_netfilter_link_attach.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_netfilter_link_attach.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later

#include "vmlinux.h"
#include <bpf/bpf_helpers.h>

#define NF_ACCEPT 1

SEC("netfilter")
int nf_link_attach_test(struct bpf_nf_ctx *ctx)
{
	return NF_ACCEPT;
}

char _license[] SEC("license") = "GPL";

```
