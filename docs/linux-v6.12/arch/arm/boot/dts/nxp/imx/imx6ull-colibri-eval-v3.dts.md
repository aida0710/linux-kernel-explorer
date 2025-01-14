---
sidebar_position: 428
---
# imx6ull-colibri-eval-v3.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ull-colibri-eval-v3.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2018-2022 Toradex
 */

/dts-v1/;

#include "imx6ull-colibri-nonwifi.dtsi"
#include "imx6ull-colibri-eval-v3.dtsi"

/ {
	model = "Toradex Colibri iMX6ULL 256/512MB on Colibri Evaluation Board V3";
	compatible = "toradex,colibri-imx6ull-eval", "toradex,colibri-imx6ull", "fsl,imx6ull";
};

&ad7879_ts {
	status = "okay";
};

&backlight {
	status = "okay";
};

&i2c2 {
	status = "okay";
};

&lcdif {
	status = "okay";
};

&panel_dpi {
	status = "okay";
};

&pwm4 {
	status = "okay";
};

```
