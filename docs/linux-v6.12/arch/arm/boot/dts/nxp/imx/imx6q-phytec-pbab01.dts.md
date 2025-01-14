---
sidebar_position: 190
---
# imx6q-phytec-pbab01.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6q-phytec-pbab01.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright 2013 Christian Hemp, Phytec Messtechnik GmbH
 */

/dts-v1/;
#include "imx6q-phytec-pfla02.dtsi"
#include "imx6qdl-phytec-pbab01.dtsi"

/ {
	model = "Phytec phyFLEX-i.MX6 Quad Carrier-Board";
	compatible = "phytec,imx6q-pbab01", "phytec,imx6q-pfla02", "fsl,imx6q";

	chosen {
		stdout-path = &uart4;
	};
};

&sata {
	status = "okay";
};

```
