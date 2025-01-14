---
sidebar_position: 45
---
# test-libperl.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libperl.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <EXTERN.h>
#include <perl.h>

int main(void)
{
	perl_alloc();

	return 0;
}

```
