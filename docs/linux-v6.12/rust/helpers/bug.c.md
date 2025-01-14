---
sidebar_position: 2
---
# bug.c

### ファイル情報

- パス: `linux-v6.12/rust/helpers/bug.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/bug.h>

__noreturn void rust_helper_BUG(void)
{
	BUG();
}

```
