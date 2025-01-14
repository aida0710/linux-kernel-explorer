---
sidebar_position: 4
---
# rt_sigreturn.S

### ファイル情報

- パス: `linux-v6.12/arch/csky/kernel/vdso/rt_sigreturn.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0-only */

#include <linux/linkage.h>
#include <asm/unistd.h>
#include <abi/vdso.h>

	.text
ENTRY(__vdso_rt_sigreturn)
	.cfi_startproc
	.cfi_signal_frame
	SET_SYSCALL_ID
	trap	0
	.cfi_endproc
ENDPROC(__vdso_rt_sigreturn)

```
