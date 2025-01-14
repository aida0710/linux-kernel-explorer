---
sidebar_position: 425
---
# imx6ull-colibri-emmc-iris-v2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ull-colibri-emmc-iris-v2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2022 Toradex
 */

/dts-v1/;

#include "imx6ull-colibri-emmc-nonwifi.dtsi"
#include "imx6ull-colibri-iris-v2.dtsi"

/ {
	model = "Toradex Colibri iMX6ULL 1G (eMMC) on Colibri Iris V2";
	compatible = "toradex,colibri-imx6ull-emmc-iris-v2",
		     "toradex,colibri-imx6ull-emmc",
		     "fsl,imx6ull";
};

```
