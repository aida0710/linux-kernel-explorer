---
sidebar_position: 51
---
# vid-pll-div.h

### ファイル情報

- パス: `linux-v6.12/drivers/clk/meson/vid-pll-div.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (c) 2019 BayLibre, SAS.
 * Author: Jerome Brunet <jbrunet@baylibre.com>
 */

#ifndef __MESON_VID_PLL_DIV_H
#define __MESON_VID_PLL_DIV_H

#include <linux/clk-provider.h>
#include "parm.h"

struct meson_vid_pll_div_data {
	struct parm val;
	struct parm sel;
};

extern const struct clk_ops meson_vid_pll_div_ro_ops;

#endif /* __MESON_VID_PLL_DIV_H */

```
