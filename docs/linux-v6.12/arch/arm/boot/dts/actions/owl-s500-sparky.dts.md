---
sidebar_position: 8
---
# owl-s500-sparky.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/actions/owl-s500-sparky.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Allo.com Sparky
 *
 * Copyright (c) 2017 Andreas Färber
 */

/dts-v1/;

#include "owl-s500.dtsi"

/ {
	compatible = "allo,sparky", "actions,s500";
	model = "Allo.com Sparky";

	aliases {
		serial3 = &uart3;
	};

	chosen {
		stdout-path = "serial3:115200n8";
	};

	memory@0 {
		device_type = "memory";
		reg = <0x0 0x40000000>; /* 1 or 2 GiB */
	};
};

&timer {
	clocks = <&hosc>;
};

&uart3 {
	status = "okay";
};

```
