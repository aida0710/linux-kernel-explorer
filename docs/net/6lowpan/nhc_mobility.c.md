---
sidebar_position: 20
---
# nhc_mobility.c

### ファイル情報

- パス: `net/6lowpan/nhc_mobility.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 *	6LoWPAN IPv6 Mobility Header compression according to RFC6282
 */

#include "nhc.h"

#define LOWPAN_NHC_MOBILITY_ID_0	0xe8
#define LOWPAN_NHC_MOBILITY_MASK_0	0xfe

LOWPAN_NHC(nhc_mobility, "RFC6282 Mobility", NEXTHDR_MOBILITY, 0,
	   LOWPAN_NHC_MOBILITY_ID_0, LOWPAN_NHC_MOBILITY_MASK_0, NULL, NULL);

module_lowpan_nhc(nhc_mobility);
MODULE_DESCRIPTION("6LoWPAN next header RFC6282 Mobility compression");
MODULE_LICENSE("GPL");

```
