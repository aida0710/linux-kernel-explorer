---
sidebar_position: 45
---
# dma-mv_xor.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/dma-mv_xor.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Marvell XOR platform device data definition file.
 */

#ifndef __DMA_MV_XOR_H
#define __DMA_MV_XOR_H

#include <linux/dmaengine.h>
#include <linux/mbus.h>

#define MV_XOR_NAME	"mv_xor"

struct mv_xor_channel_data {
	dma_cap_mask_t			cap_mask;
};

struct mv_xor_platform_data {
	struct mv_xor_channel_data    *channels;
};

#endif

```
