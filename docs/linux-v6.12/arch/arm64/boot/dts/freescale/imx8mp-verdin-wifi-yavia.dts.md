---
sidebar_position: 266
---
# imx8mp-verdin-wifi-yavia.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mp-verdin-wifi-yavia.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2023 Toradex
 */

/dts-v1/;

#include "imx8mp-verdin.dtsi"
#include "imx8mp-verdin-wifi.dtsi"
#include "imx8mp-verdin-yavia.dtsi"

/ {
	model = "Toradex Verdin iMX8M Plus WB on Yavia Board";
	compatible = "toradex,verdin-imx8mp-wifi-yavia",
		     "toradex,verdin-imx8mp-wifi",
		     "toradex,verdin-imx8mp",
		     "fsl,imx8mp";
};

```
