---
sidebar_position: 424
---
# imx6ull-colibri-emmc-eval-v3.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ull-colibri-emmc-eval-v3.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0+ OR MIT
/*
 * Copyright 2021 Toradex
 */

/dts-v1/;

#include "imx6ull-colibri-emmc-nonwifi.dtsi"
#include "imx6ull-colibri-eval-v3.dtsi"

/ {
	model = "Toradex Colibri iMX6ULL 1GB (eMMC) on Colibri Evaluation Board V3";
	compatible = "toradex,colibri-imx6ull-emmc-eval",
		     "toradex,colibri-imx6ull-emmc",
		     "fsl,imx6ull";
};

```
