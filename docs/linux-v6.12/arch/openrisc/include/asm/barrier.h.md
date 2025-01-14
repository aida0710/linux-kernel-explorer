---
sidebar_position: 3
---
# barrier.h

### ファイル情報

- パス: `linux-v6.12/arch/openrisc/include/asm/barrier.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_BARRIER_H
#define __ASM_BARRIER_H

#define mb() asm volatile ("l.msync" ::: "memory")

#include <asm-generic/barrier.h>

#endif /* __ASM_BARRIER_H */

```
