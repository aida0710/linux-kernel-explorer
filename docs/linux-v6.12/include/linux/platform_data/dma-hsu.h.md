---
sidebar_position: 42
---
# dma-hsu.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/dma-hsu.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Driver for the High Speed UART DMA
 *
 * Copyright (C) 2015 Intel Corporation
 */

#ifndef _PLATFORM_DATA_DMA_HSU_H
#define _PLATFORM_DATA_DMA_HSU_H

struct device;

struct hsu_dma_slave {
	struct device	*dma_dev;
	int		chan_id;
};

#endif /* _PLATFORM_DATA_DMA_HSU_H */

```
