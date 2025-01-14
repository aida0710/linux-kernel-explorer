---
sidebar_position: 260
---
# imx8mp-verdin-nonwifi-mallow.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mp-verdin-nonwifi-mallow.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2023 Toradex
 */

/dts-v1/;

#include "imx8mp-verdin.dtsi"
#include "imx8mp-verdin-nonwifi.dtsi"
#include "imx8mp-verdin-mallow.dtsi"

/ {
	model = "Toradex Verdin iMX8M Plus on Mallow Board";
	compatible = "toradex,verdin-imx8mp-nonwifi-mallow",
		     "toradex,verdin-imx8mp-nonwifi",
		     "toradex,verdin-imx8mp",
		     "fsl,imx8mp";
};

```
