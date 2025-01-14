---
sidebar_position: 157
---
# stack_pointer.h

### ファイル情報

- パス: `linux-v6.12/arch/arm64/include/asm/stack_pointer.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_STACK_POINTER_H
#define __ASM_STACK_POINTER_H

/*
 * how to get the current stack pointer from C
 */
register unsigned long current_stack_pointer asm ("sp");

#endif /* __ASM_STACK_POINTER_H */

```
