---
sidebar_position: 12
---
# vdso.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/abiv2/inc/abi/vdso.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __ABI_CSKY_VDSO_H
#define __ABI_CSKY_VDSO_H

/* movi r7, 173 */
#define SET_SYSCALL_ID	.long 0x008bea07

#endif /* __ABI_CSKY_VDSO_H */

```
