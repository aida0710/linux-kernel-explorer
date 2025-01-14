---
sidebar_position: 170
---
# omap3-devkit8000.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/omap3-devkit8000.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Author: Anthoine Bourgeois <anthoine.bourgeois@gmail.com>
 */
/dts-v1/;

#include "omap3-devkit8000-common.dtsi"
/ {
	model = "TimLL OMAP3 Devkit8000";
	compatible = "timll,omap3-devkit8000", "ti,omap3430", "ti,omap3";

	aliases {
		display1 = &dvi0;
		display2 = &tv0;
	};
};

```
