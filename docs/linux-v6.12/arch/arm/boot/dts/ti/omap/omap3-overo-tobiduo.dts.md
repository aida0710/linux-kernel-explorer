---
sidebar_position: 227
---
# omap3-overo-tobiduo.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/omap3-overo-tobiduo.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2015 Ash Charles, Gumstix, Inc.
 */

/*
 * TobiDuo expansion board is manufactured by Gumstix Inc.
 */

/dts-v1/;

#include "omap3-overo.dtsi"
#include "omap3-overo-tobiduo-common.dtsi"

/ {
	model = "OMAP35xx Gumstix Overo on TobiDuo";
	compatible = "gumstix,omap3-overo-tobiduo", "gumstix,omap3-overo", "ti,omap3430", "ti,omap3";
};

```
