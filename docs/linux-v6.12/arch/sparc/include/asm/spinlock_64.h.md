---
sidebar_position: 189
---
# spinlock_64.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/spinlock_64.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* spinlock.h: 64-bit Sparc spinlock support.
 *
 * Copyright (C) 1997 David S. Miller (davem@caip.rutgers.edu)
 */

#ifndef __SPARC64_SPINLOCK_H
#define __SPARC64_SPINLOCK_H

#ifndef __ASSEMBLY__

#include <asm/processor.h>
#include <asm/barrier.h>
#include <asm/qspinlock.h>
#include <asm/qrwlock.h>

#endif /* !(__ASSEMBLY__) */

#endif /* !(__SPARC64_SPINLOCK_H) */

```
