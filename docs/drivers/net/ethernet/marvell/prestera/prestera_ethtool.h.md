---
sidebar_position: 13
---
# prestera_ethtool.h

### ファイル情報

- パス: `drivers/net/ethernet/marvell/prestera/prestera_ethtool.h`

### コンテンツ

```h
/* SPDX-License-Identifier: BSD-3-Clause OR GPL-2.0 */
/* Copyright (c) 2019-2020 Marvell International Ltd. All rights reserved. */

#ifndef __PRESTERA_ETHTOOL_H_
#define __PRESTERA_ETHTOOL_H_

#include <linux/ethtool.h>

struct prestera_port_event;
struct prestera_port;

extern const struct ethtool_ops prestera_ethtool_ops;

#endif /* _PRESTERA_ETHTOOL_H_ */

```
