---
sidebar_position: 4
---
# owl-s500-guitar.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/actions/owl-s500-guitar.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * LeMaker Guitar SoM
 *
 * Copyright (c) 2016-2017 Andreas Färber
 */

#include "owl-s500.dtsi"

/ {
	compatible = "lemaker,guitar", "actions,s500";

	memory@0 {
		device_type = "memory";
		reg = <0x0 0x40000000>;
	};
};

&timer {
	clocks = <&hosc>;
};

```
