---
sidebar_position: 1
---
# owl-sps.h

### ファイル情報

- パス: `linux-v6.12/include/linux/soc/actions/owl-sps.h`

### コンテンツ

```h
/*
 * Copyright (c) 2017 Andreas Färber
 *
 * SPDX-License-Identifier: GPL-2.0+
 */
#ifndef SOC_ACTIONS_OWL_SPS_H
#define SOC_ACTIONS_OWL_SPS_H

int owl_sps_set_pg(void __iomem *base, u32 pwr_mask, u32 ack_mask, bool enable);

#endif

```
