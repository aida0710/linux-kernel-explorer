---
sidebar_position: 24
---
# fres.c

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/math-emu/fres.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/types.h>
#include <linux/errno.h>
#include <linux/uaccess.h>

int
fres(void *frD, void *frB)
{
#ifdef DEBUG
	printk("%s: %p %p\n", __func__, frD, frB);
#endif
	return -ENOSYS;
}

```
