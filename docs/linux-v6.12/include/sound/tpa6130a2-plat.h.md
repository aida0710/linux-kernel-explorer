---
sidebar_position: 149
---
# tpa6130a2-plat.h

### ファイル情報

- パス: `linux-v6.12/include/sound/tpa6130a2-plat.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * TPA6130A2 driver platform header
 *
 * Copyright (C) Nokia Corporation
 *
 * Author: Peter Ujfalusi <peter.ujfalusi@ti.com>
 */

#ifndef TPA6130A2_PLAT_H
#define TPA6130A2_PLAT_H

struct tpa6130a2_platform_data {
	int power_gpio;
};

#endif

```
