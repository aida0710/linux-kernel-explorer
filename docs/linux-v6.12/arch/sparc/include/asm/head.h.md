---
sidebar_position: 78
---
# head.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/head.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_HEAD_H
#define ___ASM_SPARC_HEAD_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/head_64.h>
#else
#include <asm/head_32.h>
#endif
#endif

```
