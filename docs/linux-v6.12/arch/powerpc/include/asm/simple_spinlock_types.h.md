---
sidebar_position: 247
---
# simple_spinlock_types.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/asm/simple_spinlock_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_POWERPC_SIMPLE_SPINLOCK_TYPES_H
#define _ASM_POWERPC_SIMPLE_SPINLOCK_TYPES_H

#ifndef __LINUX_SPINLOCK_TYPES_RAW_H
# error "please don't include this file directly"
#endif

typedef struct {
	volatile unsigned int slock;
} arch_spinlock_t;

#define __ARCH_SPIN_LOCK_UNLOCKED	{ 0 }

typedef struct {
	volatile signed int lock;
} arch_rwlock_t;

#define __ARCH_RW_LOCK_UNLOCKED		{ 0 }

#endif /* _ASM_POWERPC_SIMPLE_SPINLOCK_TYPES_H */

```
