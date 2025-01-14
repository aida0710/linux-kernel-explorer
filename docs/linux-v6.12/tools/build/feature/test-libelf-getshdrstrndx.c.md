---
sidebar_position: 41
---
# test-libelf-getshdrstrndx.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libelf-getshdrstrndx.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <libelf.h>

int main(void)
{
	size_t dst;

	return elf_getshdrstrndx(0, &dst);
}

```
