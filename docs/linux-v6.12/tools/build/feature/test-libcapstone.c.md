---
sidebar_position: 35
---
# test-libcapstone.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libcapstone.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <capstone/capstone.h>

int main(void)
{
	csh handle;

	cs_open(CS_ARCH_X86, CS_MODE_64, &handle);
	return 0;
}

```
