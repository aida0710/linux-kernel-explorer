---
sidebar_position: 26
---
# frsqrte.c

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/math-emu/frsqrte.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/types.h>
#include <linux/errno.h>
#include <linux/uaccess.h>

int
frsqrte(void *frD, void *frB)
{
#ifdef DEBUG
	printk("%s: %p %p\n", __func__, frD, frB);
#endif
	return 0;
}

```
