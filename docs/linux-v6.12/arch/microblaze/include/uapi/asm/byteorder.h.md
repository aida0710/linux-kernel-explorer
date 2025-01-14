---
sidebar_position: 2
---
# byteorder.h

### ファイル情報

- パス: `linux-v6.12/arch/microblaze/include/uapi/asm/byteorder.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _ASM_MICROBLAZE_BYTEORDER_H
#define _ASM_MICROBLAZE_BYTEORDER_H

#ifdef __MICROBLAZEEL__
#include <linux/byteorder/little_endian.h>
#else
#include <linux/byteorder/big_endian.h>
#endif

#endif /* _ASM_MICROBLAZE_BYTEORDER_H */

```
