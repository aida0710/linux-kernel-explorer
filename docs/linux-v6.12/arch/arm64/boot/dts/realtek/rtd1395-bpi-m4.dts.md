---
sidebar_position: 14
---
# rtd1395-bpi-m4.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/realtek/rtd1395-bpi-m4.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0-or-later OR BSD-2-Clause)
/*
 * Copyright (c) 2019 Andreas Färber
 */

/dts-v1/;

#include "rtd1395.dtsi"

/ {
	compatible = "bananapi,bpi-m4", "realtek,rtd1395";
	model = "Banana Pi BPI-M4";

	memory@2f000 {
		device_type = "memory";
		reg = <0x2f000 0x3ffd1000>; /* boot ROM to 1 GiB or 2 GiB */
	};

	aliases {
		serial0 = &uart0;
	};

	chosen {
		stdout-path = "serial0:115200n8";
	};
};

&uart0 {
	status = "okay";
};

```
