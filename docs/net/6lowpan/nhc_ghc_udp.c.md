---
sidebar_position: 17
---
# nhc_ghc_udp.c

### ファイル情報

- パス: `net/6lowpan/nhc_ghc_udp.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 *	6LoWPAN UDP compression according to RFC7400
 */

#include "nhc.h"

#define LOWPAN_GHC_UDP_ID_0	0xd0
#define LOWPAN_GHC_UDP_MASK_0	0xf8

LOWPAN_NHC(ghc_udp, "RFC7400 UDP", NEXTHDR_UDP, 0,
	   LOWPAN_GHC_UDP_ID_0, LOWPAN_GHC_UDP_MASK_0, NULL, NULL);

module_lowpan_nhc(ghc_udp);
MODULE_DESCRIPTION("6LoWPAN generic header UDP compression");
MODULE_LICENSE("GPL");

```
