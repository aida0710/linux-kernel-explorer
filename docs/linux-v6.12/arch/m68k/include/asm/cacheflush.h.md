---
sidebar_position: 23
---
# cacheflush.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/include/asm/cacheflush.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef __uClinux__
#include <asm/cacheflush_no.h>
#else
#include <asm/cacheflush_mm.h>
#endif

```
