---
sidebar_position: 19
---
# v2m-mps2.c

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-versatile/v2m-mps2.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2015 ARM Limited
 *
 * Author: Vladimir Murzin <vladimir.murzin@arm.com>
 */

#include <asm/mach/arch.h>

static const char *const mps2_compat[] __initconst = {
	"arm,mps2",
	NULL
};

DT_MACHINE_START(MPS2DT, "MPS2 (Device Tree Support)")
	.dt_compat = mps2_compat,
MACHINE_END

```
