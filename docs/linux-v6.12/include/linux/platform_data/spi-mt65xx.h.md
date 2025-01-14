---
sidebar_position: 143
---
# spi-mt65xx.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/spi-mt65xx.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 *  MTK SPI bus driver definitions
 *
 * Copyright (c) 2015 MediaTek Inc.
 * Author: Leilk Liu <leilk.liu@mediatek.com>
 */

#ifndef ____LINUX_PLATFORM_DATA_SPI_MTK_H
#define ____LINUX_PLATFORM_DATA_SPI_MTK_H

/* Board specific platform_data */
struct mtk_chip_config {
	u32 sample_sel;
	u32 tick_delay;
};
#endif

```
