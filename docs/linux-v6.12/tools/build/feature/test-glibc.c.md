---
sidebar_position: 22
---
# test-glibc.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-glibc.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <stdlib.h>

#if !defined(__UCLIBC__)
#include <gnu/libc-version.h>
#else
#define XSTR(s) STR(s)
#define STR(s) #s
#endif

int main(void)
{
#if !defined(__UCLIBC__)
	const char *version = gnu_get_libc_version();
#else
	const char *version = XSTR(__GLIBC__) "." XSTR(__GLIBC_MINOR__);
#endif

	return (long)version;
}

```
