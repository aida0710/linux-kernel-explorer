---
sidebar_position: 25
---
# rj54n1cb0c.h

### ファイル情報

- パス: `linux-v6.12/include/media/i2c/rj54n1cb0c.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * RJ54N1CB0C Private data
 *
 * Copyright (C) 2009, Guennadi Liakhovetski <g.liakhovetski@gmx.de>
 */

#ifndef __RJ54N1CB0C_H__
#define __RJ54N1CB0C_H__

struct rj54n1_pdata {
	unsigned int	mclk_freq;
	bool		ioctl_high;
};

#endif

```
