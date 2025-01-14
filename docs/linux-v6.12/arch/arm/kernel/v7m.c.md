---
sidebar_position: 82
---
# v7m.c

### ファイル情報

- パス: `linux-v6.12/arch/arm/kernel/v7m.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2013 Uwe Kleine-Koenig for Pengutronix
 */
#include <linux/io.h>
#include <linux/reboot.h>
#include <asm/barrier.h>
#include <asm/v7m.h>

void armv7m_restart(enum reboot_mode mode, const char *cmd)
{
	dsb();
	__raw_writel(V7M_SCB_AIRCR_VECTKEY | V7M_SCB_AIRCR_SYSRESETREQ,
			BASEADDR_V7M_SCB + V7M_SCB_AIRCR);
	dsb();
}

```
