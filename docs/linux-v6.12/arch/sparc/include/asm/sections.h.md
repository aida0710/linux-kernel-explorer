---
sidebar_position: 172
---
# sections.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/sections.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __SPARC_SECTIONS_H
#define __SPARC_SECTIONS_H

/* nothing to see, move along */
#include <asm-generic/sections.h>

/* sparc entry point */
extern char _start[];

extern char __leon_1insn_patch[];
extern char __leon_1insn_patch_end[];

#endif

```
