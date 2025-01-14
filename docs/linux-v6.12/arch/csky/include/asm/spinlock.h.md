---
sidebar_position: 40
---
# spinlock.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/include/asm/spinlock.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __ASM_CSKY_SPINLOCK_H
#define __ASM_CSKY_SPINLOCK_H

#include <asm/qspinlock.h>
#include <asm/qrwlock.h>

/* See include/linux/spinlock.h */
#define smp_mb__after_spinlock()	smp_mb()

#endif /* __ASM_CSKY_SPINLOCK_H */

```
