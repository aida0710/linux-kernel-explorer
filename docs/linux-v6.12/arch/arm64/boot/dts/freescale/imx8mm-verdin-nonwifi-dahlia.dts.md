---
sidebar_position: 175
---
# imx8mm-verdin-nonwifi-dahlia.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mm-verdin-nonwifi-dahlia.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2022 Toradex
 */

/dts-v1/;

#include "imx8mm-verdin.dtsi"
#include "imx8mm-verdin-nonwifi.dtsi"
#include "imx8mm-verdin-dahlia.dtsi"

/ {
	model = "Toradex Verdin iMX8M Mini on Dahlia Board";
	compatible = "toradex,verdin-imx8mm-nonwifi-dahlia",
		     "toradex,verdin-imx8mm-nonwifi",
		     "toradex,verdin-imx8mm",
		     "fsl,imx8mm";
};

```
