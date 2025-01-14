---
sidebar_position: 2
---
# elf.h

### ファイル情報

- パス: `linux-v6.12/tools/objtool/arch/x86/include/arch/elf.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
#ifndef _OBJTOOL_ARCH_ELF
#define _OBJTOOL_ARCH_ELF

#define R_NONE		R_X86_64_NONE
#define R_ABS32		R_X86_64_32
#define R_ABS64		R_X86_64_64
#define R_DATA32	R_X86_64_PC32
#define R_DATA64	R_X86_64_PC32
#define R_TEXT32	R_X86_64_PC32
#define R_TEXT64	R_X86_64_PC32

#endif /* _OBJTOOL_ARCH_ELF */

```
