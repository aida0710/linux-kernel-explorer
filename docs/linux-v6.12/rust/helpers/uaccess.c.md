---
sidebar_position: 16
---
# uaccess.c

### ファイル情報

- パス: `linux-v6.12/rust/helpers/uaccess.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/uaccess.h>

unsigned long rust_helper_copy_from_user(void *to, const void __user *from,
					 unsigned long n)
{
	return copy_from_user(to, from, n);
}

unsigned long rust_helper_copy_to_user(void __user *to, const void *from,
				       unsigned long n)
{
	return copy_to_user(to, from, n);
}

```
