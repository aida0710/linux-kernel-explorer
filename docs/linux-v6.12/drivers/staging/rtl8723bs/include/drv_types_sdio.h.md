---
sidebar_position: 4
---
# drv_types_sdio.h

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rtl8723bs/include/drv_types_sdio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/******************************************************************************
 *
 * Copyright(c) 2007 - 2011 Realtek Corporation. All rights reserved.
 *
 ******************************************************************************/
#ifndef __DRV_TYPES_SDIO_H__
#define __DRV_TYPES_SDIO_H__

/*  SDIO Header Files */
	#include <linux/mmc/sdio_func.h>
	#include <linux/mmc/sdio_ids.h>

struct sdio_data {
	u8  func_number;

	u8  tx_block_mode;
	u8  rx_block_mode;
	u32 block_transfer_len;

	struct sdio_func	 *func;
	void *sys_sdio_irq_thd;
};

#endif

```
