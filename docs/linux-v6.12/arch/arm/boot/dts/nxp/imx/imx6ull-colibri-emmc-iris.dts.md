---
sidebar_position: 426
---
# imx6ull-colibri-emmc-iris.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ull-colibri-emmc-iris.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2022 Toradex
 */

/dts-v1/;

#include "imx6ull-colibri-emmc-nonwifi.dtsi"
#include "imx6ull-colibri-iris.dtsi"

/ {
	model = "Toradex Colibri iMX6ULL 1GB (eMMC) on Colibri Iris";
	compatible = "toradex,colibri-imx6ull-emmc-iris",
		     "toradex,colibri-imx6ull-emmc",
		     "fsl,imx6ull";
};

```
