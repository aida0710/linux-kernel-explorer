---
sidebar_position: 6
---
# sigcontext.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/include/uapi/asm/sigcontext.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */

#ifndef __ASM_CSKY_SIGCONTEXT_H
#define __ASM_CSKY_SIGCONTEXT_H

#include <asm/ptrace.h>

struct sigcontext {
	struct pt_regs	sc_pt_regs;
	struct user_fp	sc_user_fp;
};

#endif /* __ASM_CSKY_SIGCONTEXT_H */

```
