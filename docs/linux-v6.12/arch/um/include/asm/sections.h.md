---
sidebar_position: 30
---
# sections.h

### ファイル情報

- パス: `linux-v6.12/arch/um/include/asm/sections.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __UM_SECTIONS_H
#define __UM_SECTIONS_H

#include <asm-generic/sections.h>

extern char __binary_start[];
extern char __syscall_stub_start[], __syscall_stub_end[];

#endif

```
