---
sidebar_position: 4
---
# __ffs.h

### ファイル情報

- パス: `linux-v6.12/arch/openrisc/include/asm/bitops/__ffs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * OpenRISC Linux
 *
 * Copyright (C) 2010-2011 Jonas Bonn <jonas@southpole.se>
 */

#ifndef __ASM_OPENRISC___FFS_H
#define __ASM_OPENRISC___FFS_H


#ifdef CONFIG_OPENRISC_HAVE_INST_FF1

static inline unsigned long __ffs(unsigned long x)
{
	int ret;

	__asm__ ("l.ff1 %0,%1"
		 : "=r" (ret)
		 : "r" (x));

	return ret-1;
}

#else
#include <asm-generic/bitops/__ffs.h>
#endif

#endif /* __ASM_OPENRISC___FFS_H */

```
