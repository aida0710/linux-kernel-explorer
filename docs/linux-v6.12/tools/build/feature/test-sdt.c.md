---
sidebar_position: 70
---
# test-sdt.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-sdt.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <sys/sdt.h>

int main(void)
{
	DTRACE_PROBE(provider, name);
	return 0;
}

```
