---
sidebar_position: 29
---
# test-libaudit.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libaudit.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <libaudit.h>

extern int printf(const char *format, ...);

int main(void)
{
	printf("error message: %s\n", audit_errno_to_name(0));

	return audit_open();
}

```
