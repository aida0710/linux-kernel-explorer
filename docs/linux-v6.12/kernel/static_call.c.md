---
sidebar_position: 90
---
# static_call.c

### ファイル情報

- パス: `linux-v6.12/kernel/static_call.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/static_call.h>

long __static_call_return0(void)
{
	return 0;
}
EXPORT_SYMBOL_GPL(__static_call_return0);

```
