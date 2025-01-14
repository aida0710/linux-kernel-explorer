---
sidebar_position: 47
---
# syscall_nrs.c

### ファイル情報

- パス: `linux-v6.12/samples/bpf/syscall_nrs.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <uapi/linux/unistd.h>
#include <linux/kbuild.h>

#define SYSNR(_NR) DEFINE(SYS ## _NR, _NR)

void syscall_defines(void)
{
	COMMENT("Linux system call numbers.");
	SYSNR(__NR_write);
	SYSNR(__NR_read);
#ifdef __NR_mmap2
	SYSNR(__NR_mmap2);
#endif
#ifdef __NR_mmap
	SYSNR(__NR_mmap);
#endif

}

```
