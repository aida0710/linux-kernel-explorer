---
sidebar_position: 15
---
# maccess.c

### ファイル情報

- パス: `linux-v6.12/arch/um/kernel/maccess.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2013 Richard Weinberger <richrd@nod.at>
 */

#include <linux/uaccess.h>
#include <linux/kernel.h>
#include <os.h>

bool copy_from_kernel_nofault_allowed(const void *src, size_t size)
{
	void *psrc = (void *)rounddown((unsigned long)src, PAGE_SIZE);

	if ((unsigned long)src < PAGE_SIZE || size <= 0)
		return false;
	if (os_mincore(psrc, size + src - psrc) <= 0)
		return false;
	return true;
}

```
