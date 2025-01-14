---
sidebar_position: 16
---
# param.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/include/uapi/asm/param.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _M68K_PARAM_H
#define _M68K_PARAM_H

#ifdef __uClinux__
#define EXEC_PAGESIZE	4096
#else
#define EXEC_PAGESIZE	8192
#endif

#include <asm-generic/param.h>

#endif /* _M68K_PARAM_H */

```
