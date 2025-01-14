---
sidebar_position: 13
---
# clk-cpu-dyndiv.h

### ファイル情報

- パス: `linux-v6.12/drivers/clk/meson/clk-cpu-dyndiv.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (c) 2019 BayLibre, SAS.
 * Author: Neil Armstrong <narmstrong@baylibre.com>
 */

#ifndef __MESON_CLK_CPU_DYNDIV_H
#define __MESON_CLK_CPU_DYNDIV_H

#include <linux/clk-provider.h>
#include "parm.h"

struct meson_clk_cpu_dyndiv_data {
	struct parm div;
	struct parm dyn;
};

extern const struct clk_ops meson_clk_cpu_dyndiv_ops;

#endif /* __MESON_CLK_CPU_DYNDIV_H */

```
