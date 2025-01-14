---
sidebar_position: 9
---
# __ffz.h

### ファイル情報

- パス: `linux-v6.12/tools/include/asm-generic/bitops/__ffz.h`

### コンテンツ

```h
#ifndef _ASM_GENERIC_BITOPS_FFZ_H_
#define _ASM_GENERIC_BITOPS_FFZ_H_

/*
 * ffz - find first zero in word.
 * @word: The word to search
 *
 * Undefined if no zero exists, so code should check against ~0UL first.
 */
#define ffz(x)  __ffs(~(x))

#endif /* _ASM_GENERIC_BITOPS_FFZ_H_ */

```
