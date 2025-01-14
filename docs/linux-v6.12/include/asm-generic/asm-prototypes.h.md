---
sidebar_position: 5
---
# asm-prototypes.h

### ファイル情報

- パス: `linux-v6.12/include/asm-generic/asm-prototypes.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#include <linux/bitops.h>
#undef __memset
extern void *__memset(void *, int, __kernel_size_t);
#undef __memcpy
extern void *__memcpy(void *, const void *, __kernel_size_t);
#undef __memmove
extern void *__memmove(void *, const void *, __kernel_size_t);
#undef memset
extern void *memset(void *, int, __kernel_size_t);
#undef memcpy
extern void *memcpy(void *, const void *, __kernel_size_t);
#undef memmove
extern void *memmove(void *, const void *, __kernel_size_t);

```
