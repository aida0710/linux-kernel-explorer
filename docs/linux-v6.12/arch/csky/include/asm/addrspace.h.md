---
sidebar_position: 1
---
# addrspace.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/include/asm/addrspace.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __ASM_CSKY_ADDRSPACE_H
#define __ASM_CSKY_ADDRSPACE_H

#define KSEG0		0x80000000ul
#define KSEG0ADDR(a)	(((unsigned long)a & 0x1fffffff) | KSEG0)

#endif /* __ASM_CSKY_ADDRSPACE_H */

```
