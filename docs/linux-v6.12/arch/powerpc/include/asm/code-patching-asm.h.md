---
sidebar_position: 25
---
# code-patching-asm.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/asm/code-patching-asm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/*
 * Copyright 2018, Michael Ellerman, IBM Corporation.
 */
#ifndef _ASM_POWERPC_CODE_PATCHING_ASM_H
#define _ASM_POWERPC_CODE_PATCHING_ASM_H

/* Define a "site" that can be patched */
.macro patch_site label name
	.pushsection ".rodata"
	.balign 4
	.global \name
\name:
	.4byte	\label - .
	.popsection
.endm

#endif /* _ASM_POWERPC_CODE_PATCHING_ASM_H */

```
