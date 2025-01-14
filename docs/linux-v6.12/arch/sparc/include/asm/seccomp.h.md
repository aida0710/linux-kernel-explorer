---
sidebar_position: 171
---
# seccomp.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/seccomp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_SECCOMP_H
#define _ASM_SECCOMP_H

#include <linux/unistd.h>

#define __NR_seccomp_sigreturn_32 __NR_sigreturn

#include <asm-generic/seccomp.h>

#endif /* _ASM_SECCOMP_H */

```
