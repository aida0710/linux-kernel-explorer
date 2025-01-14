---
sidebar_position: 48
---
# idle.h

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/include/asm/idle.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_IDLE_H
#define __ASM_IDLE_H

#include <linux/linkage.h>

extern asmlinkage void __arch_cpu_idle(void);

#endif /* __ASM_IDLE_H  */

```
