---
sidebar_position: 10
---
# mtd-xip.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-sa1100/include/mach/mtd-xip.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * MTD primitives for XIP support. Architecture specific functions
 *
 * Do not include this file directly. It's included from linux/mtd/xip.h
 * 
 * Author:	Nicolas Pitre
 * Created:	Nov 2, 2004
 * Copyright:	(C) 2004 MontaVista Software, Inc.
 */

#ifndef __ARCH_SA1100_MTD_XIP_H__
#define __ARCH_SA1100_MTD_XIP_H__

#include <mach/hardware.h>

#define xip_irqpending()	(ICIP & ICMR)

/* we sample OSCR and convert desired delta to usec (1/4 ~= 1000000/3686400) */
#define xip_currtime()		readl_relaxed(OSCR)
#define xip_elapsed_since(x)	(signed)((readl_relaxed(OSCR) - (x)) / 4)

#endif /* __ARCH_SA1100_MTD_XIP_H__ */

```
