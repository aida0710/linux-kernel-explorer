---
sidebar_position: 36
---
# suspend.h

### ファイル情報

- パス: `linux-v6.12/arch/hexagon/include/asm/suspend.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (c) 2010-2011, The Linux Foundation. All rights reserved.
 */

#ifndef _ASM_SUSPEND_H
#define _ASM_SUSPEND_H

static inline int arch_prepare_suspend(void)
{
	return 0;
}

#endif

```
