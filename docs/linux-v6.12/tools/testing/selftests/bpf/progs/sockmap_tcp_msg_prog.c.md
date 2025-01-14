---
sidebar_position: 371
---
# sockmap_tcp_msg_prog.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/sockmap_tcp_msg_prog.c`

### コンテンツ

```c
#include <linux/bpf.h>

#include <bpf/bpf_helpers.h>
#include <bpf/bpf_endian.h>

SEC("sk_msg1")
int bpf_prog1(struct sk_msg_md *msg)
{
	return SK_PASS;
}

char _license[] SEC("license") = "GPL";

```
