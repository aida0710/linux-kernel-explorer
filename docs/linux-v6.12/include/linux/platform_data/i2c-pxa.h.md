---
sidebar_position: 70
---
# i2c-pxa.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/i2c-pxa.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 *  i2c_pxa.h
 *
 *  Copyright (C) 2002 Intrinsyc Software Inc.
 */
#ifndef _I2C_PXA_H_
#define _I2C_PXA_H_

struct i2c_pxa_platform_data {
	unsigned int		class;
	unsigned int		use_pio :1;
	unsigned int		fast_mode :1;
	unsigned int		high_mode:1;
	unsigned char		master_code;
	unsigned long		rate;
};
#endif

```
