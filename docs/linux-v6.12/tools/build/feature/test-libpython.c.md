---
sidebar_position: 47
---
# test-libpython.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libpython.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <Python.h>

int main(void)
{
	Py_Initialize();

	return 0;
}
#undef _GNU_SOURCE

```
