---
sidebar_position: 368
---
# imx6sx-udoo-neo-basic.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6sx-udoo-neo-basic.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2016 Andreas Färber
 */

/dts-v1/;

#include "imx6sx-udoo-neo.dtsi"

/ {
	model = "UDOO Neo Basic";
	compatible = "udoo,neobasic", "fsl,imx6sx";

	memory@80000000 {
		device_type = "memory";
		reg = <0x80000000 0x20000000>;
	};
};

&fec1 {
	phy-handle = <&ethphy1>;
	status = "okay";

	mdio {
		#address-cells = <1>;
		#size-cells = <0>;

		ethphy1: ethernet-phy@0 {
			compatible = "ethernet-phy-ieee802.3-c22";
			reg = <0>;
		};
	};
};

```
