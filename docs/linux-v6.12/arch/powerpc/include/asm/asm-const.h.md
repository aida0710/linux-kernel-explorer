---
sidebar_position: 5
---
# asm-const.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/asm/asm-const.h`

### コンテンツ

```h
#ifndef _ASM_POWERPC_ASM_CONST_H
#define _ASM_POWERPC_ASM_CONST_H

#ifdef __ASSEMBLY__
#  define stringify_in_c(...)	__VA_ARGS__
#  define ASM_CONST(x)		x
#else
/* This version of stringify will deal with commas... */
#  define __stringify_in_c(...)	#__VA_ARGS__
#  define stringify_in_c(...)	__stringify_in_c(__VA_ARGS__) " "
#  define __ASM_CONST(x)	x##UL
#  define ASM_CONST(x)		__ASM_CONST(x)
#endif

#endif /* _ASM_POWERPC_ASM_CONST_H */

```
