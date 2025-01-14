---
sidebar_position: 51
---
# delay.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/delay.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_DELAY_H
#define ___ASM_SPARC_DELAY_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/delay_64.h>
#else
#include <asm/delay_32.h>
#endif
#endif

```
