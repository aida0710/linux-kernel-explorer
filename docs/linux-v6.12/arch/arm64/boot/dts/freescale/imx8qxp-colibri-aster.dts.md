---
sidebar_position: 314
---
# imx8qxp-colibri-aster.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8qxp-colibri-aster.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2018-2021 Toradex
 */

/dts-v1/;

#include "imx8qxp-colibri.dtsi"
#include "imx8x-colibri-aster.dtsi"

/ {
	model = "Toradex Colibri iMX8QXP on Aster Board";
	compatible = "toradex,colibri-imx8x-aster",
		     "toradex,colibri-imx8x",
		     "fsl,imx8qxp";
};

```
