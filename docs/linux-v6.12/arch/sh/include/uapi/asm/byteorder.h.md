---
sidebar_position: 2
---
# byteorder.h

### ファイル情報

- パス: `linux-v6.12/arch/sh/include/uapi/asm/byteorder.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef __ASM_SH_BYTEORDER_H
#define __ASM_SH_BYTEORDER_H

#ifdef __LITTLE_ENDIAN__
#include <linux/byteorder/little_endian.h>
#else
#include <linux/byteorder/big_endian.h>
#endif

#endif /* __ASM_SH_BYTEORDER_H */

```
