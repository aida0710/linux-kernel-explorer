---
sidebar_position: 3
---
# fcntl.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/uapi/asm/fcntl.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _ARM_FCNTL_H
#define _ARM_FCNTL_H

#define O_DIRECTORY	 040000	/* must be a directory */
#define O_NOFOLLOW	0100000	/* don't follow links */
#define O_DIRECT	0200000	/* direct disk access hint - currently ignored */
#define O_LARGEFILE	0400000

#include <asm-generic/fcntl.h>

#endif

```
