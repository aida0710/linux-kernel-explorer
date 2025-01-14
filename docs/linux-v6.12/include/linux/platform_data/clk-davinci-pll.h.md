---
sidebar_position: 30
---
# clk-davinci-pll.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/clk-davinci-pll.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0
/*
 * PLL clock driver for TI Davinci SoCs
 *
 * Copyright (C) 2018 David Lechner <david@lechnology.com>
 */

#ifndef __LINUX_PLATFORM_DATA_CLK_DAVINCI_PLL_H__
#define __LINUX_PLATFORM_DATA_CLK_DAVINCI_PLL_H__

#include <linux/regmap.h>

/**
 * davinci_pll_platform_data
 * @cfgchip: CFGCHIP syscon regmap
 */
struct davinci_pll_platform_data {
	struct regmap *cfgchip;
};

#endif /* __LINUX_PLATFORM_DATA_CLK_DAVINCI_PLL_H__ */

```
