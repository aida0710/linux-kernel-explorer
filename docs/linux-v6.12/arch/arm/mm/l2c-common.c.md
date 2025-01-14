---
sidebar_position: 54
---
# l2c-common.c

### ファイル情報

- パス: `linux-v6.12/arch/arm/mm/l2c-common.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2010 ARM Ltd.
 * Written by Catalin Marinas <catalin.marinas@arm.com>
 */
#include <linux/bug.h>
#include <linux/smp.h>
#include <asm/outercache.h>

void outer_disable(void)
{
	WARN_ON(!irqs_disabled());
	WARN_ON(num_online_cpus() > 1);

	if (outer_cache.disable)
		outer_cache.disable();
}

```
