---
sidebar_position: 497
---
# imx7d-colibri-emmc-iris-v2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx7d-colibri-emmc-iris-v2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2022 Toradex
 */

/dts-v1/;
#include "imx7d-colibri-emmc.dtsi"
#include "imx7-colibri-iris-v2.dtsi"

/ {
	model = "Toradex Colibri iMX7D 1GB on Iris V2 Carrier Board";
	compatible = "toradex,colibri-imx7d-emmc-iris-v2",
		     "toradex,colibri-imx7d-emmc",
		     "fsl,imx7d";
};

/* Colibri USBH */
&usbotg2 {
	disable-over-current;
	status = "okay";
};

```
