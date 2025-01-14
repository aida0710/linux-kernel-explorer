---
sidebar_position: 99
---
# tracex7.bpf.c

### ファイル情報

- パス: `linux-v6.12/samples/bpf/tracex7.bpf.c`

### コンテンツ

```c
#include "vmlinux.h"
#include <linux/version.h>
#include <bpf/bpf_helpers.h>

SEC("kprobe/open_ctree")
int bpf_prog1(struct pt_regs *ctx)
{
	unsigned long rc = -12;

	bpf_override_return(ctx, rc);
	return 0;
}

char _license[] SEC("license") = "GPL";
u32 _version SEC("version") = LINUX_VERSION_CODE;

```
