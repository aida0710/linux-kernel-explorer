---
sidebar_position: 12
---
# socfpga_arria10_socdk_sdmmc.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/intel/socfpga/socfpga_arria10_socdk_sdmmc.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0+
/*
 * Copyright (C) 2014-2015 Altera Corporation <www.altera.com>
 */

/dts-v1/;
#include "socfpga_arria10_socdk.dtsi"

&mmc {
	status = "okay";
	cap-sd-highspeed;
	cap-mmc-highspeed;
	broken-cd;
	bus-width = <4>;
	clk-phase-sd-hs = <0>, <135>;
};

&eccmgr {
	sdmmca-ecc@ff8c2c00 {
		compatible = "altr,socfpga-sdmmc-ecc";
		reg = <0xff8c2c00 0x400>;
		altr,ecc-parent = <&mmc>;
		interrupts = <15 IRQ_TYPE_LEVEL_HIGH>,
			     <47 IRQ_TYPE_LEVEL_HIGH>,
			     <16 IRQ_TYPE_LEVEL_HIGH>,
			     <48 IRQ_TYPE_LEVEL_HIGH>;
	};
};

```
