---
sidebar_position: 183
---
# omap3-ha.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/omap3-ha.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2012 Texas Instruments Incorporated - https://www.ti.com/
 * Copyright (C) 2014 Stefan Roese <sr@denx.de>
 */

#include "omap3-ha-common.dtsi"

/ {
	model = "TI OMAP3 HEAD acoustics baseboard with TAO3530 SOM";
	compatible = "headacoustics,omap3-ha", "technexion,omap3-tao3530", "ti,omap3430", "ti,omap34xx", "ti,omap3";
};

&omap3_pmx_core {
	pinctrl-names = "default";
	pinctrl-0 = <
		&hsusbb2_pins
		&powerdown_input_pins
		&fpga_boot0_pins
		&fpga_boot1_pins
		&led_blue_pins
		&led_green_pins
		&led_red_pins
	>;
};

```
