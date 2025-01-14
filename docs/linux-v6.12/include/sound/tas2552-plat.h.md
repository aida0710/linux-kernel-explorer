---
sidebar_position: 138
---
# tas2552-plat.h

### ファイル情報

- パス: `linux-v6.12/include/sound/tas2552-plat.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * TAS2552 driver platform header
 *
 * Copyright (C) 2014 Texas Instruments Inc.
 *
 * Author: Dan Murphy <dmurphy@ti.com>
 */

#ifndef TAS2552_PLAT_H
#define TAS2552_PLAT_H

struct tas2552_platform_data {
	int enable_gpio;
};

#endif

```
