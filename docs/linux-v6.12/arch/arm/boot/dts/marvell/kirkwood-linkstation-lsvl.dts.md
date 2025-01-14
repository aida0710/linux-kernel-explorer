---
sidebar_position: 135
---
# kirkwood-linkstation-lsvl.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/marvell/kirkwood-linkstation-lsvl.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Device Tree file for Buffalo Linkstation LS-VL
 *
 * Copyright (C) 2015, 2016
 * Roger Shimizu <rogershimizu@gmail.com>
 */

/dts-v1/;
#include "kirkwood-linkstation-6282.dtsi"

/ {
	model = "Buffalo Linkstation LS-VL";
	compatible = "buffalo,lsvl", "marvell,kirkwood-88f6282", "marvell,kirkwood";

	memory { /* 256 MB */
		device_type = "memory";
		reg = <0x00000000 0x10000000>;
	};
};

```
