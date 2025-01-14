---
sidebar_position: 20
---
# flash.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-omap1/flash.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Flash support for OMAP1
 */

#ifndef __OMAP_FLASH_H
#define __OMAP_FLASH_H

#include <linux/mtd/map.h>

struct platform_device;
extern void omap1_set_vpp(struct platform_device *pdev, int enable);

#endif

```
