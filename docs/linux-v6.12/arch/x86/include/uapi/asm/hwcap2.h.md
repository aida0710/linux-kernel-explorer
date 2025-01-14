---
sidebar_position: 11
---
# hwcap2.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/include/uapi/asm/hwcap2.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _ASM_X86_HWCAP2_H
#define _ASM_X86_HWCAP2_H

#include <linux/const.h>

/* MONITOR/MWAIT enabled in Ring 3 */
#define HWCAP2_RING3MWAIT		_BITUL(0)

/* Kernel allows FSGSBASE instructions available in Ring 3 */
#define HWCAP2_FSGSBASE			_BITUL(1)

#endif

```
