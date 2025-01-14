---
sidebar_position: 11
---
# vdso.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/abiv1/inc/abi/vdso.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __ABI_CSKY_VDSO_H
#define __ABI_CSKY_VDSO_H

/* movi r1, 127; addi r1, (139 - 127) */
#define SET_SYSCALL_ID	.long 0x20b167f1

#endif /* __ABI_CSKY_VDSO_H */

```
