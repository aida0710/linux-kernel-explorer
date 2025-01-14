---
sidebar_position: 15
---
# icssg_switchdev.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/ti/icssg/icssg_switchdev.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright (C) 2021 Texas Instruments Incorporated - https://www.ti.com/
 */
#ifndef __NET_TI_ICSSG_SWITCHDEV_H
#define __NET_TI_ICSSG_SWITCHDEV_H

#include "icssg_prueth.h"

int prueth_switchdev_register_notifiers(struct prueth *prueth);
void prueth_switchdev_unregister_notifiers(struct prueth *prueth);
bool prueth_dev_check(const struct net_device *ndev);

#endif /* __NET_TI_ICSSG_SWITCHDEV_H */

```
