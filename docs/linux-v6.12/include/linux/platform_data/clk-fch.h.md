---
sidebar_position: 31
---
# clk-fch.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/clk-fch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * clock framework for AMD misc clocks
 *
 * Copyright 2018 Advanced Micro Devices, Inc.
 */

#ifndef __CLK_FCH_H
#define __CLK_FCH_H

#include <linux/compiler.h>

struct fch_clk_data {
	void __iomem *base;
	char *name;
};

#endif /* __CLK_FCH_H */

```
