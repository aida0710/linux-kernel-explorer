---
sidebar_position: 10
---
# hbg_mdio.h

### ファイル情報

- パス: `drivers/net/ethernet/hisilicon/hibmcge/hbg_mdio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/* Copyright (c) 2024 Hisilicon Limited. */

#ifndef __HBG_MDIO_H
#define __HBG_MDIO_H

#include "hbg_common.h"

int hbg_mdio_init(struct hbg_priv *priv);
void hbg_phy_start(struct hbg_priv *priv);
void hbg_phy_stop(struct hbg_priv *priv);
#endif

```
