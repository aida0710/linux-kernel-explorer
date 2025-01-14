---
sidebar_position: 10
---
# rtd1295-zidoo-x9s.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/realtek/rtd1295-zidoo-x9s.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0-or-later OR BSD-2-Clause)
/*
 * Copyright (c) 2016-2017 Andreas Färber
 */

/dts-v1/;

#include "rtd1295.dtsi"

/ {
	compatible = "zidoo,x9s", "realtek,rtd1295";
	model = "Zidoo X9S";

	memory@1f000 {
		device_type = "memory";
		reg = <0x1f000 0x7ffe1000>; /* boot ROM to 2 GiB */
	};

	aliases {
		serial0 = &uart0;
		serial1 = &uart1;
	};

	chosen {
		stdout-path = "serial0:115200n8";
	};
};

&uart0 {
	status = "okay";
};

&uart1 {
	status = "okay";
};

```
