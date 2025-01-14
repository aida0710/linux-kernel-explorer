---
sidebar_position: 9
---
# rtd1295-xnano-x5.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/realtek/rtd1295-xnano-x5.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0-or-later OR BSD-2-Clause)
/*
 * Copyright (c) 2017-2019 Andreas Färber
 */

/dts-v1/;

#include "rtd1295.dtsi"

/ {
	compatible = "xnano,x5", "realtek,rtd1295";
	model = "Xnano X5";

	memory@1f000 {
		device_type = "memory";
		reg = <0x1f000 0x3ffe1000>; /* boot ROM to 1 GiB or 2 GiB */
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
