---
sidebar_position: 182
---
# imx8mm-verdin-wifi-mallow.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mm-verdin-wifi-mallow.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2023 Toradex
 */

/dts-v1/;

#include "imx8mm-verdin.dtsi"
#include "imx8mm-verdin-wifi.dtsi"
#include "imx8mm-verdin-mallow.dtsi"

/ {
	model = "Toradex Verdin iMX8M Mini WB on Mallow";
	compatible = "toradex,verdin-imx8mm-wifi-mallow",
		     "toradex,verdin-imx8mm-wifi",
		     "toradex,verdin-imx8mm",
		     "fsl,imx8mm";
};

```
