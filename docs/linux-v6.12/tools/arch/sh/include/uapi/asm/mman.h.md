---
sidebar_position: 1
---
# mman.h

### ファイル情報

- パス: `linux-v6.12/tools/arch/sh/include/uapi/asm/mman.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef TOOLS_ARCH_SH_UAPI_ASM_MMAN_FIX_H
#define TOOLS_ARCH_SH_UAPI_ASM_MMAN_FIX_H
#include <uapi/asm-generic/mman.h>
/* MAP_32BIT is undefined on sh, fix it for perf */
#define MAP_32BIT	0
#endif

```
