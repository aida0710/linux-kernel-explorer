---
sidebar_position: 205
---
# thread_info.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/thread_info.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_THREAD_INFO_H
#define ___ASM_SPARC_THREAD_INFO_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/thread_info_64.h>
#else
#include <asm/thread_info_32.h>
#endif
#endif

```
