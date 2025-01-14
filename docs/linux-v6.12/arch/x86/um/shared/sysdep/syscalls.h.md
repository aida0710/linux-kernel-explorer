---
sidebar_position: 16
---
# syscalls.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/um/shared/sysdep/syscalls.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef __i386__
#include "syscalls_32.h"
#else
#include "syscalls_64.h"
#endif

```
