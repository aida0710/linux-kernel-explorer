---
sidebar_position: 177
---
# imx8mm-verdin-nonwifi-mallow.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mm-verdin-nonwifi-mallow.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2023 Toradex
 */

/dts-v1/;

#include "imx8mm-verdin.dtsi"
#include "imx8mm-verdin-nonwifi.dtsi"
#include "imx8mm-verdin-mallow.dtsi"

/ {
	model = "Toradex Verdin iMX8M Mini on Mallow";
	compatible = "toradex,verdin-imx8mm-nonwifi-mallow",
		     "toradex,verdin-imx8mm-nonwifi",
		     "toradex,verdin-imx8mm",
		     "fsl,imx8mm";
};

```
