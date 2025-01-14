---
sidebar_position: 113
---
# timex.h

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/include/asm/timex.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2020-2022 Loongson Technology Corporation Limited
 */
#ifndef _ASM_TIMEX_H
#define _ASM_TIMEX_H

#ifdef __KERNEL__

#include <linux/compiler.h>

#include <asm/cpu.h>
#include <asm/cpu-features.h>

typedef unsigned long cycles_t;

#define get_cycles get_cycles

static inline cycles_t get_cycles(void)
{
	return drdtime();
}

#endif /* __KERNEL__ */

#endif /*  _ASM_TIMEX_H */

```
