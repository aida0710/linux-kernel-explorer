---
sidebar_position: 49
---
# armada-390.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/marvell/armada-390.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Device Tree Include file for Marvell Armada 390 SoC.
 *
 * Copyright (C) 2015 Marvell
 *
 * Thomas Petazzoni <thomas.petazzoni@free-electrons.com>
 */

#include "armada-39x.dtsi"

/ {
	compatible = "marvell,armada390";

	soc {
		internal-regs {
			pinctrl@18000 {
				compatible = "marvell,mv88f6920-pinctrl";
				reg = <0x18000 0x20>;
			};
		};
	};
};

```
