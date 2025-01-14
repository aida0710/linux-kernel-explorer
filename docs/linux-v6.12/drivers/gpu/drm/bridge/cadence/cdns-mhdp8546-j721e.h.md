---
sidebar_position: 10
---
# cdns-mhdp8546-j721e.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/bridge/cadence/cdns-mhdp8546-j721e.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * TI j721e Cadence MHDP8546 DP wrapper
 *
 * Copyright (C) 2020 Texas Instruments Incorporated - http://www.ti.com/
 * Author: Jyri Sarha <jsarha@ti.com>
 */

#ifndef CDNS_MHDP8546_J721E_H
#define CDNS_MHDP8546_J721E_H

#include "cdns-mhdp8546-core.h"

struct mhdp_platform_ops;

extern const struct mhdp_platform_ops mhdp_ti_j721e_ops;
extern const u32 mhdp_ti_j721e_bridge_input_bus_flags;

#endif /* !CDNS_MHDP8546_J721E_H */

```
