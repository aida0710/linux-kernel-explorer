---
sidebar_position: 3
---
# nolibc-test-linkage.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/nolibc/nolibc-test-linkage.c`

### コンテンツ

```c
/* SPDX-License-Identifier: GPL-2.0 */

#include "nolibc-test-linkage.h"

#ifndef NOLIBC
#include <errno.h>
#endif

void *linkage_test_errno_addr(void)
{
	return &errno;
}

int linkage_test_constructor_test_value;

__attribute__((constructor))
static void constructor1(void)
{
	linkage_test_constructor_test_value = 2;
}

__attribute__((constructor))
static void constructor2(void)
{
	linkage_test_constructor_test_value *= 3;
}

```
