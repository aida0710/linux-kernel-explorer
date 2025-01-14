---
sidebar_position: 811
---
# mv643xx_i2c.h

### ファイル情報

- パス: `linux-v6.12/include/linux/mv643xx_i2c.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 */

#ifndef _MV64XXX_I2C_H_
#define _MV64XXX_I2C_H_

#include <linux/types.h>

#define MV64XXX_I2C_CTLR_NAME	"mv64xxx_i2c"

/* i2c Platform Device, Driver Data */
struct mv64xxx_i2c_pdata {
	u32	freq_m;
	u32	freq_n;
	u32	timeout;	/* In milliseconds */
};

#endif /*_MV64XXX_I2C_H_*/

```
