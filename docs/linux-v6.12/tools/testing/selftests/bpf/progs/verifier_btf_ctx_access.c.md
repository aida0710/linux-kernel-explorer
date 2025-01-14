---
sidebar_position: 724
---
# verifier_btf_ctx_access.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/verifier_btf_ctx_access.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Converted from tools/testing/selftests/bpf/verifier/btf_ctx_access.c */

#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>
#include "bpf_misc.h"

SEC("fentry/bpf_modify_return_test")
__description("btf_ctx_access accept")
__success __retval(0)
__naked void btf_ctx_access_accept(void)
{
	asm volatile ("					\
	r2 = *(u32*)(r1 + 8);		/* load 2nd argument value (int pointer) */\
	r0 = 0;						\
	exit;						\
"	::: __clobber_all);
}

SEC("fentry/bpf_fentry_test9")
__description("btf_ctx_access u32 pointer accept")
__success __retval(0)
__naked void ctx_access_u32_pointer_accept(void)
{
	asm volatile ("					\
	r2 = *(u32*)(r1 + 0);		/* load 1nd argument value (u32 pointer) */\
	r0 = 0;						\
	exit;						\
"	::: __clobber_all);
}

char _license[] SEC("license") = "GPL";

```
