---
sidebar_position: 14
---
# test-dwarf_getcfi.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-dwarf_getcfi.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <stdio.h>
#include <elfutils/libdw.h>

int main(void)
{
	Dwarf *dwarf = NULL;
	return dwarf_getcfi(dwarf) == NULL;
}

```
