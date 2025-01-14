---
sidebar_position: 141
---
# logicpd-torpedo-35xx-devkit.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/logicpd-torpedo-35xx-devkit.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only

/dts-v1/;

#include "omap34xx.dtsi"
#include "logicpd-torpedo-som.dtsi"
#include "logicpd-torpedo-baseboard.dtsi"
#include "omap-gpmc-smsc9221.dtsi"

/ {
	model = "LogicPD Zoom OMAP35xx Torpedo Development Kit";
	compatible = "logicpd,dm3730-torpedo-devkit", "ti,omap3430", "ti,omap3";
};

&omap3_pmx_core {
	isp1763_pins: isp1763-pins {
		pinctrl-single,pins = <
			OMAP3_CORE1_IOPAD(0x2154,  PIN_INPUT_PULLUP | MUX_MODE4)	/* sdmmc1_dat6.gpio_128 */
		>;
	};
};

```
