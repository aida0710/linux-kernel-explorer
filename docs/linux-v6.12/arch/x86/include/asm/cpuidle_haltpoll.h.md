---
sidebar_position: 47
---
# cpuidle_haltpoll.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/include/asm/cpuidle_haltpoll.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ARCH_HALTPOLL_H
#define _ARCH_HALTPOLL_H

void arch_haltpoll_enable(unsigned int cpu);
void arch_haltpoll_disable(unsigned int cpu);

#endif

```
