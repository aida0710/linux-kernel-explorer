---
sidebar_position: 67
---
# floppy.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/floppy.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_FLOPPY_H
#define ___ASM_SPARC_FLOPPY_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/floppy_64.h>
#else
#include <asm/floppy_32.h>
#endif
#endif

```
