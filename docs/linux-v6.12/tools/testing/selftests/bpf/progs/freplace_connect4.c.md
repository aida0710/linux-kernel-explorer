---
sidebar_position: 222
---
# freplace_connect4.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/freplace_connect4.c`

### コンテンツ

```c
#include <linux/stddef.h>
#include <linux/ipv6.h>
#include <linux/bpf.h>
#include <linux/in.h>
#include <sys/socket.h>
#include <bpf/bpf_helpers.h>
#include <bpf/bpf_endian.h>

SEC("freplace/do_bind")
int new_do_bind(struct bpf_sock_addr *ctx)
{
  struct sockaddr_in sa = {};

  bpf_bind(ctx, (struct sockaddr *)&sa, sizeof(sa));
  return 0;
}

char _license[] SEC("license") = "GPL";

```
