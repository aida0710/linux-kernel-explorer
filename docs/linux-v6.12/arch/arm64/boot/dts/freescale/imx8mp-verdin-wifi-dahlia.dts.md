---
sidebar_position: 263
---
# imx8mp-verdin-wifi-dahlia.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mp-verdin-wifi-dahlia.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2022 Toradex
 */

/dts-v1/;

#include "imx8mp-verdin.dtsi"
#include "imx8mp-verdin-wifi.dtsi"
#include "imx8mp-verdin-dahlia.dtsi"

/ {
	model = "Toradex Verdin iMX8M Plus WB on Dahlia Board";
	compatible = "toradex,verdin-imx8mp-wifi-dahlia",
		     "toradex,verdin-imx8mp-wifi",
		     "toradex,verdin-imx8mp",
		     "fsl,imx8mp";
};

```
