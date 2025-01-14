---
sidebar_position: 40
---
# trivial_64bit_program.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/x86/trivial_64bit_program.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Trivial program to check that we have a valid 64-bit build environment.
 * Copyright (c) 2015 Andy Lutomirski
 */

#ifndef __x86_64__
# error wrong architecture
#endif

#include <stdio.h>

int main()
{
	printf("\n");

	return 0;
}

```
