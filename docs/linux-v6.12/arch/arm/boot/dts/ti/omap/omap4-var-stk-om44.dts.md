---
sidebar_position: 263
---
# omap4-var-stk-om44.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/omap4-var-stk-om44.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2014 Joachim Eastwood <manabian@gmail.com>
 */
/dts-v1/;

#include "omap4-var-som-om44.dtsi"
#include "omap4-var-som-om44-wlan.dtsi"
#include "omap4-var-om44customboard.dtsi"

/ {
	model = "Variscite VAR-STK-OM44";
	compatible = "variscite,var-stk-om44", "variscite,var-som-om44", "ti,omap4460", "ti,omap4";
};

```
