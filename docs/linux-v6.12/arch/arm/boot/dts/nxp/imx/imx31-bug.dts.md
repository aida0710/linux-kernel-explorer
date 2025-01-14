---
sidebar_position: 558
---
# imx31-bug.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx31-bug.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright 2012 Denis 'GNUtoo' Carikli <GNUtoo@no-log.org>
 */

/dts-v1/;
#include "imx31.dtsi"

/ {
	model = "Buglabs i.MX31 Bug 1.x";
	compatible = "buglabs,imx31-bug", "fsl,imx31";

	memory@80000000 {
		device_type = "memory";
		reg = <0x80000000 0x8000000>; /* 128M */
	};
};

&uart5 {
	uart-has-rtscts;
	status = "okay";
};

```
