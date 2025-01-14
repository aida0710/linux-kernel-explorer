---
sidebar_position: 43
---
# setbit.S

### ファイル情報

- パス: `linux-v6.12/arch/arm/lib/setbit.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 *  linux/arch/arm/lib/setbit.S
 *
 *  Copyright (C) 1995-1996 Russell King
 */
#include <linux/linkage.h>
#include <asm/assembler.h>
#include "bitops.h"
		.text

bitop	_set_bit, orr

```
