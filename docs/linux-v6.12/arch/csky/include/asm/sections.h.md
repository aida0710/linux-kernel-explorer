---
sidebar_position: 37
---
# sections.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/include/asm/sections.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __ASM_SECTIONS_H
#define __ASM_SECTIONS_H

#include <asm-generic/sections.h>

extern char _start[];

asmlinkage void csky_start(unsigned int unused, void *dtb_start);

#endif /* __ASM_SECTIONS_H */

```
