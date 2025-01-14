---
sidebar_position: 7
---
# rtd1295-mele-v9.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/realtek/rtd1295-mele-v9.dts`

### コンテンツ

```dts
/*
 * Copyright (c) 2017-2019 Andreas Färber
 *
 * SPDX-License-Identifier: (GPL-2.0+ OR MIT)
 */

/dts-v1/;

#include "rtd1295.dtsi"

/ {
	compatible = "mele,v9", "realtek,rtd1295";
	model = "MeLE V9";

	memory@1f000 {
		device_type = "memory";
		reg = <0x1f000 0x7ffe1000>; /* boot ROM to 2 GiB */
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
