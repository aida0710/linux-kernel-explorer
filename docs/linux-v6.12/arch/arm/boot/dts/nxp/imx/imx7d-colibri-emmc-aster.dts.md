---
sidebar_position: 495
---
# imx7d-colibri-emmc-aster.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx7d-colibri-emmc-aster.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2017-2022 Toradex
 *
 */

/dts-v1/;
#include "imx7d-colibri-emmc.dtsi"
#include "imx7-colibri-aster.dtsi"

/ {
	model = "Toradex Colibri iMX7D 1GB (eMMC) on Aster Carrier Board";
	compatible = "toradex,colibri-imx7d-emmc-aster",
		     "toradex,colibri-imx7d-emmc",
		     "fsl,imx7d";
};

/* Colibri USBH */
&usbotg2 {
	disable-over-current;
	status = "okay";
};

```
