---
sidebar_position: 6
---
# owl-s500-labrador-v2.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/actions/owl-s500-labrador-v2.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Caninos Labrador SoM V2
 *
 * Copyright (c) 2019-2020 Matheus Castello
 */

#include "owl-s500.dtsi"

/ {
	model = "Caninos Labrador Core V2.1";
	compatible = "caninos,labrador-v2", "actions,s500";

	memory@0 {
		device_type = "memory";
		reg = <0x0 0x80000000>;
	};
};

&timer {
	clocks = <&hosc>;
};

```
