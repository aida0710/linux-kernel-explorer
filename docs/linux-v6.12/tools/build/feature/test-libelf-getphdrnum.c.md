---
sidebar_position: 40
---
# test-libelf-getphdrnum.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libelf-getphdrnum.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <libelf.h>

int main(void)
{
	size_t dst;

	return elf_getphdrnum(0, &dst);
}

```
