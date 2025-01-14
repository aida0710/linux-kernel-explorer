---
sidebar_position: 6
---
# uaccess.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/util/include/asm/uaccess.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _PERF_ASM_UACCESS_H_
#define _PERF_ASM_UACCESS_H_

#define __get_user(src, dest)						\
({									\
	(src) = *dest;							\
	0;								\
})

#define get_user	__get_user

#define access_ok(addr, size)	1

#endif

```
