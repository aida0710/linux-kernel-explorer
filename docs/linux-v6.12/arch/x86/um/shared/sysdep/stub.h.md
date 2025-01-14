---
sidebar_position: 13
---
# stub.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/um/shared/sysdep/stub.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#include <asm/unistd.h>
#include <sys/mman.h>
#include <signal.h>
#include <as-layout.h>
#include <stub-data.h>

#ifdef __i386__
#include "stub_32.h"
#else
#include "stub_64.h"
#endif

extern void stub_segv_handler(int, siginfo_t *, void *);
extern void stub_syscall_handler(void);

```
