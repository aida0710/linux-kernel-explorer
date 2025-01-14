---
sidebar_position: 483
---
# imx6ulz-14x14-evk.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ulz-14x14-evk.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
//
// Copyright 2018 NXP.

/dts-v1/;

#include "imx6ulz.dtsi"
#include "imx6ul-14x14-evk.dtsi"

/delete-node/ &fec1;
/delete-node/ &fec2;
/delete-node/ &can1;
/delete-node/ &can2;
/delete-node/ &lcdif;
/delete-node/ &tsc;

/ {
	model = "Freescale i.MX6 ULZ 14x14 EVK Board";
	compatible = "fsl,imx6ulz-14x14-evk", "fsl,imx6ull", "fsl,imx6ulz";

	/delete-node/ panel;
};

```
