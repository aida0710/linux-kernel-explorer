---
sidebar_position: 3
---
# hbg_ethtool.h

### ファイル情報

- パス: `drivers/net/ethernet/hisilicon/hibmcge/hbg_ethtool.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/* Copyright (c) 2024 Hisilicon Limited. */

#ifndef __HBG_ETHTOOL_H
#define __HBG_ETHTOOL_H

#include <linux/netdevice.h>

void hbg_ethtool_set_ops(struct net_device *netdev);

#endif

```
