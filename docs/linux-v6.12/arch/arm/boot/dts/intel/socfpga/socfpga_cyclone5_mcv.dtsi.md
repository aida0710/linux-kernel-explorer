---
sidebar_position: 16
---
# socfpga_cyclone5_mcv.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/intel/socfpga/socfpga_cyclone5_mcv.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0+
/*
 * Copyright (C) 2015 Marek Vasut <marex@denx.de>
 */

#include "socfpga_cyclone5.dtsi"

/ {
	model = "Aries/DENX MCV";
	compatible = "altr,socfpga-cyclone5", "altr,socfpga";

	memory@0 {
		name = "memory";
		device_type = "memory";
		reg = <0x0 0x40000000>; /* 1 GiB */
	};
};

&mmc0 {	/* On-SoM eMMC */
	bus-width = <8>;
	clk-phase-sd-hs = <0>, <135>;
	status = "okay";
};

```
