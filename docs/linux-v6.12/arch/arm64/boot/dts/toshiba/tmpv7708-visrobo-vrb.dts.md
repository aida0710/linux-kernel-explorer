---
sidebar_position: 3
---
# tmpv7708-visrobo-vrb.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/toshiba/tmpv7708-visrobo-vrb.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Device Tree File for TMPV7708 VisROBO VRB board
 *
 * (C) Copyright 2020, 2021, Toshiba Corporation.
 * (C) Copyright 2020, Nobuhiro Iwamatsu <nobuhiro1.iwamatsu@toshiba.co.jp>
 */

/dts-v1/;

#include "tmpv7708-visrobo-vrc.dtsi"

/ {
	model = "Toshiba TMPV7708 VisROBO (VRB) board";
	compatible = "toshiba,tmpv7708-visrobo-vrb", "toshiba,tmpv7708";

	aliases {
		serial0 = &uart0;
		serial1 = &uart1;
	};

	chosen {
		stdout-path = "serial0:115200n8";
	};

	/* 768MB memory */
	memory@80000000 {
		device_type = "memory";
		reg = <0x0 0x80000000 0x0 0x30000000>;
	};
};

&uart0 {
	status = "okay";
};

&uart1 {
	status = "okay";
};

&piether {
	status = "okay";
	phy-handle = <&phy0>;
	phy-mode = "rgmii-id";

	mdio0 {
		#address-cells = <1>;
		#size-cells = <0>;
		compatible = "snps,dwmac-mdio";
		phy0: ethernet-phy@1 {
			device_type = "ethernet-phy";
			reg = <0x1>;
		};
	};
};

```
