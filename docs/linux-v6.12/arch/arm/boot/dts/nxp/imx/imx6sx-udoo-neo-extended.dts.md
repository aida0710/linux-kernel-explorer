---
sidebar_position: 369
---
# imx6sx-udoo-neo-extended.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6sx-udoo-neo-extended.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2016 Andreas Färber
 */

/dts-v1/;

#include "imx6sx-udoo-neo.dtsi"

/ {
	model = "UDOO Neo Extended";
	compatible = "udoo,neoextended", "fsl,imx6sx";

	memory@80000000 {
		device_type = "memory";
		reg = <0x80000000 0x40000000>;
	};
};

&i2c4 { /* Onboard Motion sensors */
	status = "okay";
};

&uart3 { /* Bluetooth */
	status = "okay";
};

```
