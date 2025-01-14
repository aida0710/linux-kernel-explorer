---
sidebar_position: 143
---
# swsusp_64.c

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/kernel/swsusp_64.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/*
 * PowerPC 64-bit swsusp implementation
 *
 * Copyright 2006 Johannes Berg <johannes@sipsolutions.net>
 */

#include <asm/iommu.h>
#include <linux/irq.h>
#include <linux/sched.h>
#include <linux/interrupt.h>
#include <linux/nmi.h>

void do_after_copyback(void);

void do_after_copyback(void)
{
	iommu_restore();
	touch_softlockup_watchdog();
	mb();
}

```
