---
sidebar_position: 30
---
# memcpy_32.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/lib/memcpy_32.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/string.h>
#include <linux/export.h>

#undef memcpy
#undef memset
#undef memmove

__visible void *memcpy(void *to, const void *from, size_t n)
{
	return __memcpy(to, from, n);
}
EXPORT_SYMBOL(memcpy);

__visible void *memset(void *s, int c, size_t count)
{
	return __memset(s, c, count);
}
EXPORT_SYMBOL(memset);

```
