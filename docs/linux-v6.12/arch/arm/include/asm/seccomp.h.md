---
sidebar_position: 126
---
# seccomp.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/asm/seccomp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
#ifndef _ASM_SECCOMP_H
#define _ASM_SECCOMP_H

#include <asm-generic/seccomp.h>

#define SECCOMP_ARCH_NATIVE		AUDIT_ARCH_ARM
#define SECCOMP_ARCH_NATIVE_NR		NR_syscalls
#define SECCOMP_ARCH_NATIVE_NAME	"arm"

#endif /* _ASM_SECCOMP_H */

```
