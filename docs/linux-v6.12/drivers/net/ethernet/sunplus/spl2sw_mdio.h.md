---
sidebar_position: 12
---
# spl2sw_mdio.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/sunplus/spl2sw_mdio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright Sunplus Technology Co., Ltd.
 *       All rights reserved.
 */

#ifndef __SPL2SW_MDIO_H__
#define __SPL2SW_MDIO_H__

u32  spl2sw_mdio_init(struct spl2sw_common *comm);
void spl2sw_mdio_remove(struct spl2sw_common *comm);

#endif

```
