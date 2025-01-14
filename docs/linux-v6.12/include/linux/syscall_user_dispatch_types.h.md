---
sidebar_position: 1283
---
# syscall_user_dispatch_types.h

### ファイル情報

- パス: `linux-v6.12/include/linux/syscall_user_dispatch_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _SYSCALL_USER_DISPATCH_TYPES_H
#define _SYSCALL_USER_DISPATCH_TYPES_H

#include <linux/types.h>

#ifdef CONFIG_GENERIC_ENTRY

struct syscall_user_dispatch {
	char __user	*selector;
	unsigned long	offset;
	unsigned long	len;
	bool		on_dispatch;
};

#else

struct syscall_user_dispatch {};

#endif

#endif /* _SYSCALL_USER_DISPATCH_TYPES_H */

```
