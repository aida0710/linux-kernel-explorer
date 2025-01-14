---
sidebar_position: 211
---
# cpuidle_haltpoll.h

### ファイル情報

- パス: `linux-v6.12/include/linux/cpuidle_haltpoll.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _CPUIDLE_HALTPOLL_H
#define _CPUIDLE_HALTPOLL_H

#ifdef CONFIG_ARCH_CPUIDLE_HALTPOLL
#include <asm/cpuidle_haltpoll.h>
#else
static inline void arch_haltpoll_enable(unsigned int cpu)
{
}

static inline void arch_haltpoll_disable(unsigned int cpu)
{
}
#endif
#endif

```
