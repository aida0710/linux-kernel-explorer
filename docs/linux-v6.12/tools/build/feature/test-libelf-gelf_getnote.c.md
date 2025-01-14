---
sidebar_position: 39
---
# test-libelf-gelf_getnote.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libelf-gelf_getnote.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <stdlib.h>
#include <gelf.h>

int main(void)
{
	return gelf_getnote(NULL, 0, NULL, NULL, NULL);
}

```
