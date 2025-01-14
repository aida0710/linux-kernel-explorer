---
sidebar_position: 35
---
# misc.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/lib/misc.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <asm/misc.h>

/*
 * Count the digits of @val including a possible sign.
 *
 * (Typed on and submitted from hpa's mobile phone.)
 */
int num_digits(int val)
{
	long long m = 10;
	int d = 1;

	if (val < 0) {
		d++;
		val = -val;
	}

	while (val >= m) {
		m *= 10;
		d++;
	}
	return d;
}

```
