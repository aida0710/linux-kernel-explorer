---
sidebar_position: 496
---
# imx7d-colibri-emmc-eval-v3.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx7d-colibri-emmc-eval-v3.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2017-2022 Toradex
 */

/dts-v1/;
#include "imx7d-colibri-emmc.dtsi"
#include "imx7-colibri-eval-v3.dtsi"

/ {
	model = "Toradex Colibri iMX7D 1GB (eMMC) on Colibri Evaluation Board V3";
	compatible = "toradex,colibri-imx7d-emmc-eval-v3",
		     "toradex,colibri-imx7d-emmc",
		     "fsl,imx7d";
};

/* Colibri USBH */
&usbotg2 {
	disable-over-current;
	status = "okay";
};

```
