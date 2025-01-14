---
sidebar_position: 101
---
# mfd-mcp-sa11x0.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/mfd-mcp-sa11x0.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 *  Copyright (C) 2005 Russell King.
 */
#ifndef __MFD_MCP_SA11X0_H
#define __MFD_MCP_SA11X0_H

#include <linux/types.h>

struct mcp_plat_data {
	u32 mccr0;
	u32 mccr1;
	unsigned int sclk_rate;
	void *codec_pdata;
};

#endif

```
