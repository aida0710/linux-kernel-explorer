---
sidebar_position: 4
---
# alpine_machine.c

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-alpine/alpine_machine.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Machine declaration for Alpine platforms.
 *
 * Copyright (C) 2015 Annapurna Labs Ltd.
 */

#include <asm/mach/arch.h>

static const char * const al_match[] __initconst = {
	"al,alpine",
	NULL,
};

DT_MACHINE_START(AL_DT, "Annapurna Labs Alpine")
	.dt_compat	= al_match,
MACHINE_END

```
