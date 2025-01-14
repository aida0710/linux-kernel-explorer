---
sidebar_position: 199
---
# omap3-overo-alto35.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/omap3-overo-alto35.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2014 Florian Vaussard, EPFL Mobots group
 */

/*
 * Alto35 expansion board is manufactured by Gumstix Inc.
 */

/dts-v1/;

#include "omap3-overo.dtsi"
#include "omap3-overo-alto35-common.dtsi"

/ {
	model = "OMAP35xx Gumstix Overo on Alto35";
	compatible = "gumstix,omap3-overo-alto35", "gumstix,omap3-overo", "ti,omap3430", "ti,omap3";
};


```
