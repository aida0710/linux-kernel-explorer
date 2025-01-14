---
sidebar_position: 5
---
# vsyscall-syscall.S

### ファイル情報

- パス: `linux-v6.12/arch/sh/kernel/vsyscall/vsyscall-syscall.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
#include <linux/init.h>

__INITDATA

	.globl vsyscall_trapa_start, vsyscall_trapa_end
vsyscall_trapa_start:
	.incbin "arch/sh/kernel/vsyscall/vsyscall-trapa.so"
vsyscall_trapa_end:

__FINIT

```
