---
sidebar_position: 94
---
# sections.h

### ファイル情報

- パス: `linux-v6.12/arch/sh/include/asm/sections.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_SH_SECTIONS_H
#define __ASM_SH_SECTIONS_H

#include <asm-generic/sections.h>

extern char __machvec_start[], __machvec_end[];
extern char __uncached_start, __uncached_end;
extern char __start_eh_frame[], __stop_eh_frame[];

#endif /* __ASM_SH_SECTIONS_H */


```
