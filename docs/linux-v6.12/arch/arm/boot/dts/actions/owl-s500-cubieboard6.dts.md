---
sidebar_position: 2
---
# owl-s500-cubieboard6.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/actions/owl-s500-cubieboard6.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Cubietech CubieBoard6
 *
 * Copyright (c) 2017 Andreas Färber
 */

/dts-v1/;

#include "owl-s500.dtsi"

/ {
	compatible = "cubietech,cubieboard6", "actions,s500";
	model = "CubieBoard6";

	aliases {
		serial3 = &uart3;
	};

	chosen {
		stdout-path = "serial3:115200n8";
	};

	memory@0 {
		device_type = "memory";
		reg = <0x0 0x80000000>;
	};
};

&timer {
	clocks = <&hosc>;
};

&uart3 {
	status = "okay";
};

```
