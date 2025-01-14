---
sidebar_position: 11
---
# spear320s.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/st/spear320s.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * DTS file for SPEAr320s SoC
 *
 * Copyright 2021 Herve Codina <herve.codina@bootlin.com>
 */

/include/ "spear320.dtsi"

/ {
	ahb {
		apb {
			gpiopinctrl: gpio@b3000000 {
				/*
				 * The "RM0321 SPEAr320s address and map
				 * registers" document mentions interrupt 6
				 * (NPGIO_INTR) for the PL_GPIO interrupt.
				 */
				interrupts = <6>;
				interrupt-parent = <&shirq>;
			};
		};
	};
};

```
