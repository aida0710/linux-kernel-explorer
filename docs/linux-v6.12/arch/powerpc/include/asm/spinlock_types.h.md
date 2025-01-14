---
sidebar_position: 252
---
# spinlock_types.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/asm/spinlock_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_POWERPC_SPINLOCK_TYPES_H
#define _ASM_POWERPC_SPINLOCK_TYPES_H

#ifndef __LINUX_SPINLOCK_TYPES_RAW_H
# error "please don't include this file directly"
#endif

#ifdef CONFIG_PPC_QUEUED_SPINLOCKS
#include <asm/qspinlock_types.h>
#include <asm-generic/qrwlock_types.h>
#else
#include <asm/simple_spinlock_types.h>
#endif

#endif

```
