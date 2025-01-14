---
sidebar_position: 72
---
# sections.h

### ファイル情報

- パス: `linux-v6.12/arch/parisc/include/asm/sections.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _PARISC_SECTIONS_H
#define _PARISC_SECTIONS_H

#ifdef CONFIG_HAVE_FUNCTION_DESCRIPTORS
#include <asm/elf.h>
typedef Elf64_Fdesc func_desc_t;
#endif

/* nothing to see, move along */
#include <asm-generic/sections.h>

extern char __alt_instructions[], __alt_instructions_end[];

#endif

```
