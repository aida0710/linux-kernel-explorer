---
sidebar_position: 42
---
# test-libelf.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libelf.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <libelf.h>

int main(void)
{
	Elf *elf = elf_begin(0, ELF_C_READ, 0);

	return (long)elf;
}

```
