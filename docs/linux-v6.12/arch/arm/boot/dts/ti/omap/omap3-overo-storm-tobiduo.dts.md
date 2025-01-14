---
sidebar_position: 220
---
# omap3-overo-storm-tobiduo.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/omap3-overo-storm-tobiduo.dts`

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

#include "omap3-overo-storm.dtsi"
#include "omap3-overo-tobiduo-common.dtsi"

/ {
	model = "OMAP36xx/AM37xx/DM37xx Gumstix Overo on TobiDuo";
	compatible = "gumstix,omap3-overo-tobiduo", "gumstix,omap3-overo", "ti,omap3630", "ti,omap3";
};

```
