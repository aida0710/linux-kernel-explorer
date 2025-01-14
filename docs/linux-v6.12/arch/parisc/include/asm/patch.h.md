---
sidebar_position: 55
---
# patch.h

### ファイル情報

- パス: `linux-v6.12/arch/parisc/include/asm/patch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _PARISC_KERNEL_PATCH_H
#define _PARISC_KERNEL_PATCH_H

/* stop machine and patch kernel text */
void patch_text(void *addr, unsigned int insn);
void patch_text_multiple(void *addr, u32 *insn, unsigned int len);

/* patch kernel text with machine already stopped (e.g. in kgdb) */
void __patch_text(void *addr, u32 insn);
void __patch_text_multiple(void *addr, u32 *insn, unsigned int len);

#endif

```
