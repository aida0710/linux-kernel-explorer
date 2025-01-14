---
sidebar_position: 183
---
# imx8mm-verdin-wifi-yavia.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mm-verdin-wifi-yavia.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2023 Toradex
 */

/dts-v1/;

#include "imx8mm-verdin.dtsi"
#include "imx8mm-verdin-wifi.dtsi"
#include "imx8mm-verdin-yavia.dtsi"

/ {
	model = "Toradex Verdin iMX8M Mini WB on Yavia Board";
	compatible = "toradex,verdin-imx8mm-wifi-yavia",
		     "toradex,verdin-imx8mm-wifi",
		     "toradex,verdin-imx8mm",
		     "fsl,imx8mm";
};

```
