---
sidebar_position: 68
---
# test-scandirat.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-scandirat.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#ifndef _GNU_SOURCE
#define _GNU_SOURCE
#endif
#include <dirent.h>

int main(void)
{
	// expects non-NULL, arg3 is 'restrict' so "pointers" have to be different
	return scandirat(/*dirfd=*/ 0, /*dirp=*/ (void *)1, /*namelist=*/ (void *)2, /*filter=*/ (void *)3, /*compar=*/ (void *)4);
}

#undef _GNU_SOURCE

```
