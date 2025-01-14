---
sidebar_position: 5
---
# kprobes_trampoline.S

### ファイル情報

- パス: `linux-v6.12/arch/csky/kernel/probes/kprobes_trampoline.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0+ */

#include <linux/linkage.h>

#include <abi/entry.h>

ENTRY(__kretprobe_trampoline)
	SAVE_REGS_FTRACE

	mov	a0, sp /* pt_regs */

	jbsr	trampoline_probe_handler

	/* use the result as the return-address */
	mov	lr, a0

	RESTORE_REGS_FTRACE
	rts
ENDPROC(__kretprobe_trampoline)

```
