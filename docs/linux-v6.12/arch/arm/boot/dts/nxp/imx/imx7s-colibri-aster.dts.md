---
sidebar_position: 525
---
# imx7s-colibri-aster.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx7s-colibri-aster.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2017-2022 Toradex
 *
 */

/dts-v1/;
#include "imx7s-colibri.dtsi"
#include "imx7-colibri-aster.dtsi"

/ {
	model = "Toradex Colibri iMX7S on Aster Carrier Board";
	compatible = "toradex,colibri-imx7s-aster",
		     "toradex,colibri-imx7s",
		     "fsl,imx7s";
};

&ad7879_ts {
	status = "okay";
};

&atmel_mxt_ts {
	status = "okay";
};

&backlight {
	status = "okay";
};

&lcdif {
	status = "okay";
};

&panel_dpi {
	status = "okay";
};

```
