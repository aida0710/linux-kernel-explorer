---
sidebar_position: 454
---
# host1x_context_bus.h

### ファイル情報

- パス: `linux-v6.12/include/linux/host1x_context_bus.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Copyright (c) 2021, NVIDIA Corporation. All rights reserved.
 */

#ifndef __LINUX_HOST1X_CONTEXT_BUS_H
#define __LINUX_HOST1X_CONTEXT_BUS_H

#include <linux/device.h>

#ifdef CONFIG_TEGRA_HOST1X_CONTEXT_BUS
extern struct bus_type host1x_context_device_bus_type;
#endif

#endif

```
