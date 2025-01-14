---
sidebar_position: 1
---
# digicolor.c

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-digicolor/digicolor.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Support for Conexant Digicolor SoCs
*/

#include <asm/mach/arch.h>

static const char *const digicolor_dt_compat[] __initconst = {
	"cnxt,cx92755",
	NULL,
};

DT_MACHINE_START(DIGICOLOR, "Conexant Digicolor (Flattened Device Tree)")
	.dt_compat	= digicolor_dt_compat,
MACHINE_END

```
