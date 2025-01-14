---
sidebar_position: 382
---
# imx6ul-isiot-nand.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ul-isiot-nand.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0 OR X11
/*
 * Copyright (C) 2016 Amarula Solutions B.V.
 * Copyright (C) 2016 Engicam S.r.l.
 */

/dts-v1/;

#include "imx6ul-isiot.dtsi"

/ {
	model = "Engicam Is.IoT MX6UL NAND Starter kit";
	compatible = "engicam,imx6ul-isiot", "fsl,imx6ul";
};

&gpmi {
	status = "okay";
};

```
