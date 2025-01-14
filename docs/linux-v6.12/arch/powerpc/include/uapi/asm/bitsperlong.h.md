---
sidebar_position: 2
---
# bitsperlong.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/uapi/asm/bitsperlong.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef __ASM_POWERPC_BITSPERLONG_H
#define __ASM_POWERPC_BITSPERLONG_H

#if defined(__powerpc64__)
# define __BITS_PER_LONG 64
#else
# define __BITS_PER_LONG 32
#endif

#include <asm-generic/bitsperlong.h>

#endif /* __ASM_POWERPC_BITSPERLONG_H */

```
