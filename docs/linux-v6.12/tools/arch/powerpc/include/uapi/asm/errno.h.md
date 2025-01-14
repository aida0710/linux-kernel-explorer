---
sidebar_position: 2
---
# errno.h

### ファイル情報

- パス: `linux-v6.12/tools/arch/powerpc/include/uapi/asm/errno.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _ASM_POWERPC_ERRNO_H
#define _ASM_POWERPC_ERRNO_H

#undef	EDEADLOCK
#include <asm-generic/errno.h>

#undef	EDEADLOCK
#define	EDEADLOCK	58	/* File locking deadlock error */

#endif	/* _ASM_POWERPC_ERRNO_H */

```
