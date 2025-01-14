---
sidebar_position: 141
---
# kirkwood-lschlv2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/marvell/kirkwood-lschlv2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;

#include "kirkwood-lsxl.dtsi"

/ {
	model = "Buffalo Linkstation LS-CHLv2";
	compatible = "buffalo,lschlv2", "buffalo,lsxl", "marvell,kirkwood-88f6281", "marvell,kirkwood";

	memory {
		device_type = "memory";
		reg = <0x00000000 0x4000000>;
	};

	ocp@f1000000 {
		serial@12000 {
			status = "okay";
		};
	};
};

```
