---
sidebar_position: 16
---
# nhc_ghc_icmpv6.c

### ファイル情報

- パス: `net/6lowpan/nhc_ghc_icmpv6.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 *	6LoWPAN ICMPv6 compression according to RFC7400
 */

#include "nhc.h"

#define LOWPAN_GHC_ICMPV6_ID_0		0xdf
#define LOWPAN_GHC_ICMPV6_MASK_0	0xff

LOWPAN_NHC(ghc_icmpv6, "RFC7400 ICMPv6", NEXTHDR_ICMP, 0,
	   LOWPAN_GHC_ICMPV6_ID_0, LOWPAN_GHC_ICMPV6_MASK_0, NULL, NULL);

module_lowpan_nhc(ghc_icmpv6);
MODULE_DESCRIPTION("6LoWPAN generic header ICMPv6 compression");
MODULE_LICENSE("GPL");

```
